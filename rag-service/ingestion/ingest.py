import sys
from pathlib import Path

# Add rag-service root to path
sys.path.append(str(Path(__file__).parent.parent))

from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

DOCUMENTS_PATH = Path(__file__).parent / "documents"
VECTOR_STORE_PATH = Path(__file__).parent.parent / "vector_store"

def build_vector_store():
    print("Loading documents...")
    loader = DirectoryLoader(
        str(DOCUMENTS_PATH),
        glob="**/*.txt",
        loader_cls=TextLoader
    )
    docs = loader.load()
    print(f"Loaded {len(docs)} documents")

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )
    chunks = splitter.split_documents(docs)
    print(f"Split into {len(chunks)} chunks")

    print("Building embeddings (this may take a minute)...")
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True}
    )

    store = FAISS.from_documents(chunks, embeddings)
    store.save_local(str(VECTOR_STORE_PATH))
    print(f"Vector store saved to {VECTOR_STORE_PATH}")
    print("Ingestion complete. Vector store is ready.")

if __name__ == "__main__":
    build_vector_store()