// Import and configure Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC5k6GJxh-FCVYYkhAueURboaoPI3PpwaE",
    authDomain: "examprep-c9599.firebaseapp.com",
    projectId: "examprep-c9599",
    storageBucket: "examprep-c9599.firebasestorage.app",
    messagingSenderId: "1071649554830",
    appId: "1:1071649554830:web:1627cc46fd4f16d40aa4df"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Sign Up
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('message').textContent = "Sign up successful!";
            saveUserToDatabase(userCredential.user);
        })
        .catch((error) => {
            document.getElementById('message').textContent = error.message;
        });
});

// Log In
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('message').textContent = "Login successful!";
        })
        .catch((error) => {
            document.getElementById('message').textContent = error.message;
        });
});

// Save user to Firebase Realtime Database
function saveUserToDatabase(user) {
    const userRef = database.ref('users/' + user.uid);
    userRef.set({
        email: user.email,
        createdAt: new Date().toISOString()
    });
}