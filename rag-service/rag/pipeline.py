from langchain.chains import RetrievalQA
from langchain_ollama import ChatOllama
from rag.embeddings import load_vector_store
from rag.prompt_templates import RAG_PROMPT

_vectorstore = None
_qa_chain = None

def get_qa_chain():
    global _vectorstore, _qa_chain

    if _qa_chain is not None:
        return _qa_chain

    _vectorstore = load_vector_store()

    retriever = _vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 4}
    )

    llm = ChatOllama(
    model="llama3.2",
    temperature=0.3,
    num_predict=1024
   )

    _qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever,
        chain_type_kwargs={"prompt": RAG_PROMPT},
        return_source_documents=False
    )

    return _qa_chain

def ask(question: str) -> str:
    chain = get_qa_chain()
    result = chain.invoke({"query": question})
    return result["result"]