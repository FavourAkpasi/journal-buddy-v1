from openai import OpenAI

# for streaming
from typing_extensions import override
from openai import AssistantEventHandler


# Initialize the OpenAI client with your API key
client = OpenAI(api_key="")

  

def chat_with_assistant(user_message="Reply: No message was provided", 
                        usecase="chat",
                        model="gpt-3.5-turbo", 
                        use_stream=False):

    try:
        # Create the assistant based on the use case
        if usecase == "chat":
            assistant = client.beta.assistants.create(
              name="Diary Chat Friend",
              instructions="You are a helpful friendly assistant, have a meaningful conversation with the user about their journal entry.",
              tools=[],
              model=model,
            )
        elif usecase == "reflect":
            assistant = client.beta.assistants.create(
              name="Diary Reflection Friend",
              instructions="You are a helpful friendly assistant, ask the user three questions that make the user reflect on their last month based on the journal entries of that month",
              tools=[],
              model=model,
            )
        else:
            print("Invalid use case provided. Please choose 'chat' or 'reflect'.")
            return

        # Create a thread
        thread = client.beta.threads.create()

        # Create the initial user message in the thread
        message = client.beta.threads.messages.create(
          thread_id=thread.id,
          role="user",
          content=user_message
        )

        if use_stream:  # Streaming API usage (continuous output)

            # Define the EventHandler class here if using streaming.
            pass

        else:  # Regular API usage (single response)
            # Create the run
            run = client.beta.threads.runs.create(
                thread_id=thread.id,
                assistant_id=assistant.id,
                instructions=assistant.instructions  # Use the instructions set for the assistant
            )

            print(f"Run created with ID: {run.id}")

            # Poll for run completion
            while True:
                status_check = client.beta.threads.runs.retrieve(run_id=run.id, thread_id=thread.id)
                print(f"Checking run status: {status_check.status}")
                if status_check.status == 'completed':
                    print("Run completed successfully.")
                    break
                elif status_check.status in ['failed', 'cancelled']:
                    print(f"Run failed or was cancelled with status: {status_check.status}")
                    return
                import time
                time.sleep(1)

            # Fetch messages after run completion
            messages = client.beta.threads.messages.list(thread_id=thread.id)
            print(f"Number of messages retrieved: {len(messages.data)}")
            print('')

            def print_message_content(message):
                # Print each text value in the content if available
                for content_item in message.content:
                    if hasattr(content_item, 'text') and hasattr(content_item.text, 'value'):
                        print(content_item.text.value)


            for message in messages.data:
                if message.role == 'assistant':
                    print_message_content(message)

            # Debugg message retrieval

            # def print_message_content(message):
            #     print("Entering print_message_content...")  # Debug: Check if the function is entered
            #     try:
            #         # Assuming message.content is an attribute that exists
            #         if hasattr(message, 'content'):
            #             print("Content attribute found in message...")  # Debug: Check if content attribute exists
            #             for content_item in message.content:
            #                 # Debug: Print content item structure
            #                 print(f"Processing content item: {content_item}")
            #                 # Check if content_item.text is an attribute and has a 'value'
            #                 if hasattr(content_item, 'text') and hasattr(content_item.text, 'value'):
            #                     print("Printing text value...")  # Debug: Check if text and value attributes are found
            #                     print(content_item.text.value)
            #                 else:
            #                     print("Unexpected content structure or missing text value.")  # Debug: Printed if structure is not as expected
            #         else:
            #             print("No content attribute in message.")  # Debug: Printed if no content attribute is found
            #     except Exception as e:
            #         print(f"Error processing message content: {e}")


            # for message in messages.data:
            #     print(f"Raw message data: {message}")  # Debug: Shows the full data of each message
            #     print('')
            #     if message.role == 'assistant':
            #         print('Assistant role was accessed correctly')
            #         print('')
            #         print_message_content(message)

    except Exception as e:
        print(f"An error occurred: {e}")

chat_with_assistant(user_message="I feel good about my day, I managed to get the OpenAI API working.")



 
