import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import string
from faker import Faker

fake = Faker()

# Initialize Firebase Admin
cred = credentials.Certificate('C:/Users/hecto/Desktop/FitOut/fitout/fitout-47803-firebase-adminsdk-pb9x4-5e8ba58792.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

def generate_random_username(length=5):
    """Generate a random username."""
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))

def generate_user_profiles(num_profiles=25):
    """Generate user profiles including names and avatar URLs."""
    for _ in range(num_profiles):
        name = fake.name()
        username = generate_random_username()
        tempID = generate_random_id()
        # Since Adorable Avatars service is discontinued, using a placeholder URL for demonstration
        avatar_url = f"https://ui-avatars.com/api/?name={username}&background=random&color=random"
        user_profile = {
            'username': username,
            'name': name,
            'email': f'{username}@example.com',
            'profilePicture': avatar_url,
            'bio': f'My bio - {username}. Welcome!',
            'followerCount': 0,
            'followingCount': 0,
            'numPosts': 0,
            'createdAt': "2/22/24",
            'userID': tempID,

        }
        add_user_to_firestore(user_profile)
    

def generate_random_id(length=20):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choices(characters,k=length))
def add_user_to_firestore(user_profile):
    db.collection('users').add(user_profile)
    print(f'Added user to firestore: {user_profile["username"]}')


# Generate user profiles
num_profiles = 25  # Specify the number of user profiles you want to generate
user_profiles = generate_user_profiles(num_profiles)
random_id = 25
randomIDs = generate_random_id()
# Print generated profiles
for profile in user_profiles:
    print(profile)

