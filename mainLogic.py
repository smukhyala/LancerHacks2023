import random

questions = [
    {
        "question": "What is the capital of France?",
        "options": ["Paris", "London", "Berlin", "Rome"],
        "answer": "Paris"
    },
    {
        "question": "What is the largest ocean in the world?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },
    {
        "question": "What is the name of the world's highest mountain?",
        "options": ["Mount Kilimanjaro", "Mount Everest", "Mount Denali", "Mount Aconcagua"],
        "answer": "Mount Everest"
    }
]

# Function to display the questions and options
def ask_question(question):
    print(questions["question"])
    for i, option in enumerate(question["options"]):
        print(f"{i + 1}. {option}")

# Check if the answer is correct
def check_answer(question, answer):
    return answer == question["answer"]

# Shuffle function from random
random.shuffle(questions)

# Loop through each questions and ask for answers
correct_answers = 0
for question in questions:
    ask_question(question)
    answer = input("Enter the number of the correct answer: ")
    if check_answer(question, question["options"][int(answer) - 1]):
        print("Correct!")
        correct_answers += 1
    else:
        print("Incorrect. The correct answer is", question["answer"])

# Display the final score
print("You got", correct_answers, "out of", len(questions), "questions correct.")