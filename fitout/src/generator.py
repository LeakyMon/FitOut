import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import string

# Initialize Firebase Admin
cred = credentials.Certificate('C:/Users/hecto/Desktop/FitOut/fitout/fitout-47803-firebase-adminsdk-pb9x4-5e8ba58792.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://console.firebase.google.com/u/1/project/fitout-47803/firestore/data/~2Fusers~2F0c2kZWbfIZfqC8j2R4uIxDTEXh93'
})

db = firestore.client()

def generate_random_username(length=5):
    """Generate a random username."""
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))

def add_users_to_firestore(num_users=100):
    """Add a specified number of users to Firestore."""
    for _ in range(num_users):
        username = generate_random_username()
        user_data = {
            'username': username,
            'email': f'{username}@example.com',
            'created_at': firestore.SERVER_TIMESTAMP
        }
        # Add a new doc in collection 'users' with a generated ID.
        db.collection('users').add(user_data)
    print(f'Added {num_users} users to Firestore.')

# Example usage
add_users_to_firestore(100) # Adjust the number of users as needed
