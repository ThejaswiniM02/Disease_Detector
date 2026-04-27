from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from pathlib import Path

VECTOR_STORE_PATH = Path(__file__).parent.parent / "vector_store"
DOCUMENTS_PATH = Path(__file__).parent.parent / "ingestion" / "documents"

EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"

def get_embeddings():
    return HuggingFaceEmbeddings(
        model_name=EMBEDDING_MODEL,
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True}
    )

def build_vector_store():
    loader = DirectoryLoader(
        str(DOCUMENTS_PATH),
        glob="**/*.txt",
        loader_cls=TextLoader
    )
    docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50,
        separators=["\n\n", "\n", ".", " "]
    )
    chunks = splitter.split_documents(docs)

    embeddings = get_embeddings()
    store = FAISS.from_documents(chunks, embeddings)
    store.save_local(str(VECTOR_STORE_PATH))
    print(f"Vector store built with {len(chunks)} chunks.")
    return store

def load_vector_store():
    embeddings = get_embeddings()
    return FAISS.load_local(
        str(VECTOR_STORE_PATH),
        embeddings,
        allow_dangerous_deserialization=True
    )