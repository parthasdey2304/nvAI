import os
import streamlit as st
from dotenv import load_dotenv
import google.generativeai as gen_ai


#  environment variables
load_dotenv()

# frontend of streamlit
st.set_page_config(
    page_title="nvAI HelpBOT!",
    page_icon=":brain:",  # cute emoji
    initial_sidebar_state="expanded",
    layout="centered", 
)


st.title("nvAI HelpBOT")

st.markdown("nvAI Helpbot is dedicated for any queries related to Brain Tumour ")
\


GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# model setup
gen_ai.configure(api_key=GOOGLE_API_KEY)
model = gen_ai.GenerativeModel('gemini-pro')


# translate roles between Gemini-Pro and Streamlit terminology
def translate_role_for_streamlit(user_role):
    if user_role == "model":
        return "assistant"
    else:
        return user_role



if "chat_session" not in st.session_state:
    st.session_state.chat_session = model.start_chat(history=[])




# chat history
for message in st.session_state.chat_session.history:
    with st.chat_message(translate_role_for_streamlit(message.role)):
        st.markdown(message.parts[0].text)

<<<<<<< HEAD
prompt="you are a skilled doctor your work is to answer the question related to human brain specially human brain tumor which is asked by the user. Use technnical terms only and be precise. if question is not somehow related to medical field or human brain then just reply, Please ask question related to daignosis ."
=======
prompt="you are a skilled doctor your work is to answer the question related to human brain tumor only .specially human brain which is aksed by the user .use technnical terms only  . if question is not somehow related to medical feild or human brain tumor then just reply Please ask question related to daignosis "
>>>>>>> 083cf741ce9c6a9189268753d5134678b6b5f7b3


user_prompt = st.chat_input("Ask your question here...")
if user_prompt:
    
    
    st.chat_message("user").markdown(user_prompt)

    # message gemini ko bhejega for result
    with st.spinner("Generating response..."):
     gemini_response = st.session_state.chat_session.send_message(prompt + "\n" + user_prompt)

    # will show result
    with st.chat_message("assistant"):
        st.markdown(gemini_response.text)
