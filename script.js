// Author : SOUMYA
// Chatbot response JSON data
const responses = {
    "hello": "Hello! I'm here to support your mental well-being. How can I assist you today?",
    "hi": "Hi there! Ready to embark on a journey of mental relaxation and mindfulness?",
    "stress relief": "To relieve stress, you can try deep breathing, progressive muscle relaxation, or mindfulness meditation.",
    "anxiety": "For anxiety, grounding techniques like the 5-4-3-2-1 method can help, along with controlled breathing exercises.",
    "depression": "If you're feeling low, practicing gratitude, gentle yoga, or speaking to someone you trust can be beneficial.",
    "relaxation": "To relax, try body scanning meditation or deep breathing. Focusing on your breath helps calm the mind.",
    "mindfulness": "Mindfulness is about staying present. A simple way to practice is to focus on your breath or the sensations around you.",
    "breathing exercises": "Breathing exercises like diaphragmatic breathing or box breathing help reduce stress and promote relaxation.",
    "self-care": "Self-care includes activities like journaling, taking a walk, or listening to calming music. What do you enjoy doing for yourself?",
    "insomnia": "To tackle insomnia, try progressive muscle relaxation or a bedtime meditation. Establishing a sleep routine also helps.",
    "gratitude": "Practicing gratitude can uplift your mood. Write down three things you're grateful for today.",
    "grounding": "Grounding techniques, like naming things you can see, hear, and feel, help anchor you in the present moment.",
    "meditation": "Meditation helps calm the mind. You can start with a simple 5-minute session focusing on your breath.",
    "positive affirmations": "Positive affirmations like 'I am strong' or 'I am capable' can boost confidence and reduce negativity.",
    "journaling": "Journaling is a great way to process your emotions and thoughts. Writing down your feelings can bring clarity.",
    "exercise": "Regular physical activity like walking or yoga can help improve mood and reduce stress.",
    "mental clarity": "For mental clarity, try a quick 5-minute meditation or a short break to reset your thoughts.",
    "coping mechanisms": "Healthy coping mechanisms include talking to someone, writing in a journal, or engaging in a hobby you love.",
    "overthinking": "To manage overthinking, try redirecting your focus with a calming activity like reading or deep breathing.",
    "loneliness": "If you're feeling lonely, reaching out to a friend or joining a community group can help you feel more connected.",
    "social anxiety": "For social anxiety, practice deep breathing and prepare yourself with small, manageable goals in social settings.",
    "panic attack": "If you're experiencing a panic attack, focus on deep, slow breaths and grounding yourself in your surroundings.",
    "burnout": "For burnout, take small breaks, prioritize self-care, and set realistic boundaries for yourself.",
    "confidence": "Building confidence can start with positive affirmations and celebrating small wins daily.",
    "self-doubt": "To overcome self-doubt, focus on your strengths and remind yourself of past successes.",
    "happiness": "Happiness can come from small moments like enjoying your favorite meal or spending time in nature.",
    "fear": "Facing fears gradually and with support can help reduce their intensity over time.",
    "trust issues": "Building trust takes time. Start with open communication and setting healthy boundaries.",
    "anger management": "To manage anger, take deep breaths, count to 10, or take a moment to step away and reflect.",
    "emotional regulation": "Regulate your emotions by identifying triggers and practicing techniques like journaling or mindfulness.",
    "forgiveness": "Forgiveness can lighten your emotional burden. It's a gift you give yourself for peace of mind.",
    "relationships": "Healthy relationships are built on trust, communication, and mutual respect.",
    "loneliness in relationships": "Communicate your feelings to your partner and explore activities to reconnect and strengthen your bond.",
    "self-esteem": "Boost self-esteem by focusing on positive affirmations and avoiding self-criticism.",
    "purpose": "Finding purpose starts with exploring your passions and connecting them to actions that fulfill you.",
    "stress at work": "To manage work stress, take short breaks, organize tasks, and set realistic goals.",
    "fear of failure": "Failure is a stepping stone to success. Learn from it and focus on progress over perfection.",
    "decision-making": "For decision-making, weigh pros and cons and trust your instincts. Sometimes, clarity comes with action.",
    "hope": "Hope is about believing in possibilities. Even small steps can lead to brighter outcomes.",
    "acceptance": "Acceptance is about embracing the present and letting go of things you cannot change.",
    "letting go": "Letting go is a process. Start by focusing on what you can control and finding support when needed.",
    "boundaries": "Setting boundaries helps maintain healthy relationships. Be assertive and communicate your needs clearly.",
    "fear of the unknown": "Facing the unknown can be challenging. Focus on what you can prepare for and trust in your ability to adapt.",
    "inner peace": "Inner peace comes from mindfulness, self-compassion, and letting go of negative thoughts.",
    "toxic relationships": "Recognize signs of toxicity and prioritize your well-being. Seek support if you're unsure how to proceed.",
    "grief": "Grief takes time. Allow yourself to feel and process emotions, and seek support if needed.",
    "healing": "Healing is a journey, not a destination. Take it one step at a time and be kind to yourself.",
    "hope during hard times": "During hard times, focus on small, positive actions and remind yourself that challenges are temporary.",
    "assertiveness": "Being assertive is about expressing yourself confidently and respectfully. Practice with small steps.",
    "procrastination": "Overcome procrastination by breaking tasks into smaller steps and setting achievable goals.",
    "habits": "Build positive habits by starting small and being consistent. Celebrate progress along the way.",
    "life transitions": "Life transitions can be tough. Focus on what you can control and seek support when needed.",
    "self-awareness": "Self-awareness grows with reflection and mindfulness. Take time to understand your thoughts and feelings.",
    "self-compassion": "Treat yourself with kindness and understanding, especially during challenging times.",
    "facing challenges": "Facing challenges builds resilience. Break them into smaller steps and tackle them one at a time.",
    "finding joy": "Find joy in simple moments like a warm cup of tea, a favorite song, or a walk in nature.",
    "fear of change": "Change is an opportunity for growth. Start by embracing small changes and building confidence.",
    "energy management": "Manage your energy by prioritizing tasks, taking breaks, and practicing self-care.",
    "navigating emotions": "Labeling and accepting your emotions can help you process them more effectively.",
    "mind-body connection": "The mind and body are connected. Activities like yoga and meditation can improve overall well-being.",
    "breaking bad habits": "Replace bad habits with healthier alternatives, and be patient as you transition.",
    "empathy": "Practicing empathy involves listening without judgment and trying to understand another's perspective.",
    "joy of giving": "Giving can bring joy and purpose. Helping others can create positive connections and satisfaction.",
    "patience": "Patience grows with practice. Take deep breaths and remind yourself that progress takes time.",
    "trust in yourself": "Trust in yourself grows with self-reflection and acknowledging your strengths.",
    "life purpose": "Your purpose is unique to you. Explore what brings you joy and how you can contribute to the world.",
    "mental reset": "A mental reset can include a short walk, deep breathing, or a break from screens to refresh your mind.",
    "handling criticism": "Handle criticism by reflecting on its validity and using it as an opportunity for growth.",
    "forgiving yourself": "Self-forgiveness is essential. Learn from your mistakes and remind yourself that growth takes time.",
    "default": "I'm sorry, I didn't understand that. Could you ask something else related to mental well-being?"
};

// Function to send user message and show response
function sendMessage() {
    let userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() === "") return;

    // Show user message
    displayMessage(userMessage, 'user-message');
    
    // Respond based on user message
    let response = getResponse(userMessage.toLowerCase());
    setTimeout(() => {
        displayMessage(response, 'bot-message');
    }, 1000);
    
    // Clear the input field
    document.getElementById('userMessage').value = '';
}

// Display message in the chat
function displayMessage(message, type) {
    let messageContainer = document.getElementById('message-container');
    let newMessage = document.createElement('div');
    newMessage.classList.add('message', type);
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Get appropriate response from the JSON data
function getResponse(userMessage) {
    let keys = Object.keys(responses);
    for (let i = 0; i < keys.length; i++) {
        if (userMessage.includes(keys[i])) {
            return responses[keys[i]];
        }
    }
    return responses['default'];
}

// To handle pressing Enter key for submitting messages
document.getElementById('userMessage').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
