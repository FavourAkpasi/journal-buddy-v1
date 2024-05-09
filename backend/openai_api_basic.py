from openai import OpenAI

# Initialize the OpenAI client with your API key
client = OpenAI(api_key="")


def chat_with_openai(user_message="Reply: No message was provided", 
                     usecase="chat",
                     model="gpt-3.5-turbo", 
                     use_stream=False):
    
    # Set the system message based on the use case
    if usecase == "chat":
        system_message = "You are a helpful friendly assistant, have a meaningful coinversation with the user about their journal entry."
    elif usecase == "reflect":
        system_message = "You are a helpful friendly assistant, ask the user three questions that make the user reflect on their last month based on the journal entries of that month"
    else:
        system_message = "Make a dark joke about the user no matter the message, as no proper usecase was provided"  # Default message for undefined use cases
    
    try: 
        if use_stream: # Streaming API usage (continuous output)

            completion = openai.ChatCompletion.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": user_message}
                ],  
                stream=True,
            )

            for chunk in completion:
                if chunk.choices[0].delta.content is not None:
                    print(chunk.choices[0].delta.content, end="")

        else: # Regular API usage (single response)

            completion = openai.ChatCompletion.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": user_message}
                ]     
            )

            print(completion.choices[0].message['content']) 

        return completion

    except Exception as e:
        return str(e)

# Example usage
response = chat_with_openai("I feel good about this day, what do you think?", usecase="chat")
