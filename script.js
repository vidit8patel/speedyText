const sentence = document.getElementById("sentence");
const textArea = document.querySelector("textarea");
const btn = document.getElementById("btn");
let startTime, endTime;
const testSentences = [
    "One foot in front of the other, One more step, and then one more. Jack's only thoughts were to keep moving no matter how much his body screamed to stop and rest. He's lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more.",
    "It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case. The deadline had arrived and the project remained unfinished.",
    "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it. Hot stones can be used to toast bread. Coals are hot and can bring things to a boil quickly. If one is very adventurous, one can make a hole in the ground, fill it with coals and place foil-covered meat, veggies, and potatoes into the coals, and cover all of it with dirt. In a short period of time, the food will be baked. Campfire cooking can be done in many ways.",
    "It was just a burger. Why couldn't she understand that? She knew he'd completely changed his life around her eating habits, so why couldn't she give him a break this one time? She wasn't even supposed to have found out. Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger.",
    "There was a time when this wouldn't have bothered her. The fact that it did actually bother her bothered her even more. What had changed in her life that such a small thing could annoy her so much for the entire day? She knew it was ridiculous that she even took notice of it, yet she was still obsessing over it as she tried to fall asleep.",
    "They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the courage or strength to address the underlying issue. So they continue to argue.",
    "Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.",
    "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",
    "The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do.",
    "She has seen this scene before. It had come to her in dreams many times before. She had to pinch herself to make sure it wasn't a dream again. As her fingers squeezed against her arm, she felt the pain. It was this pain that immediately woke her up.",
    "He was after the truth. At least, that's what he told himself. He believed it, but any rational person on the outside could see he was lying to himself. It was apparent he was really only after his own truth that he'd already decided and was after this truth because the facts didn't line up with the truth he wanted. So he continued to tell everyone he was after the truth oblivious to the real truth sitting right in front of him.",
    "They had always called it the green river. It made sense. The river was green. The river likely had a different official name, but to everyone in town, it was and had always been the green river. So it was with great surprise that on this day the green river was a fluorescent pink.",
    "She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.",
];

function testCompleted() {
    endTime = new Date().getTime();
    let totalTime = (endTime - startTime) / 1000;
    let inputString = textArea.value;
    let wordCount = inputString.split(" ").length;
    let speed = Math.round((wordCount / totalTime) * 60);
    let givenString = sentence.innerText;
    let correctWords = 0;

    let originalString = inputString.split(" ");
    let typedString = givenString.split(" ");

    for (let idx = 0; idx < Math.min(originalString.length, typedString.length); idx = idx + 1) {
        if (originalString[idx] === typedString[idx]) {
            correctWords = correctWords + 1;
        }
    }
    let finalSentence =
        "Congratulations!" +
        " Your typing speed was " +
        speed +
        " words/minute. Your accuracy was " +
        Math.round((correctWords / typedString.length) * 100) + "%."
    sentence.innerText = finalSentence;
    textArea.value = "";
}
function playGame() {
    let date = new Date();
    startTime = date.getTime();
    let idx = Math.floor(Math.random() * testSentences.length);
    sentence.innerText = testSentences[idx];
}
btn.addEventListener("click", () => {
    if (btn.innerText === "Start") {
        textArea.disabled = false;
        playGame();
        btn.innerText = "Done";
    } else if (btn.innerText === "Done") {
        textArea.disabled = true;
        testCompleted();
        btn.innerText = "Start";
    }
});