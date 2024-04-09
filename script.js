// get the data
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Delhi , India",
        name: "Harshita",
        age: 22,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music",
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing",
        }],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFriend: null,
    },

    {
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1612904370392-d1dde7a8ddc8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 6,
        location: "Chennai , India",
        name: "Rebecca",
        age: 24,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music",
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing",
        }],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFriend: null,
    },

    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        location: "Bangalore , India",
        name: "Alina",
        age: 28,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music",
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing",
        }],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFriend: null,
    },

    {
        profilePic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Kolkata , India",
        name: "Rexa",
        age: 29,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music",
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing",
        }],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isFriend: null,
    },

];

let curr = 0;
let isAnimating = false;

function setData(index) {
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function (interests) {
        clutter += ` <div class="tag flex items-center bg-white/30 rounded-full px-3 py-1 gap-3">
    ${interests.icon} <h3 class="text-sm tracking-tight capitalize">${interests.interest}</h3>  
    </div>`
    })
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;

}

function select(elem) {
    return document.querySelector(elem);
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    setData(curr);

    curr = 2;

})();

function imageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");

                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");

                gsap.set(main, {
                    scxale: 1,
                    opacity: 1,
                })

                if (curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });

        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: 0.9,


        }, "a")
            .from(".incomingcard", {
                scale: .9,
                opacity: 0,
                ease: Circ,
                duration: 1.1,

            }, "a");
    }


}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        Stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5,

    })
});

accept.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        Stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5,

    })
});


(function containerCreator() {
    document.querySelectorAll(".element")
        .forEach(function (element) {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        })
})();

