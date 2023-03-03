const { options } = require("@hapi/hapi/lib/cors");

class Poll {
    constructor(root, title ){
        this.root = root;
        this.selected = sessionStorage.getItem("poll-selected");
        this.endpoint = "http://localhost:3000/poll";

        this.root.insertAdjacentHTML("afterbegin",`

        <div class="poll-title">${title}<div>
        
        `);

        this.__refresh();
    }


   async _refresh()
    {
        const response = await fetch(this.endpoint);
        const data = await response.json();

        this.root.querySelectorAll(".poll__option").forEach(options =>{

            options.remove();


        });

        for(const options of data){
            const template = document.createElement("template");
            const fragment = template.content;

            template.innerHTML = `
            <div class="poll__options ${this.selected == options.selected ? "poll__options--selected": ""}">
                <div class="poll__option_fill"></div>
                <div class="poll__option-info">
                        <span class="poll__label"> ${options.label}</span>
                        <span class="poll__percentage"> ${options.amountofVotes}</span>
                </div> `;


                if(!this.selected){
                    fragment.querySelector(".poll__option").addEventListener("click", () => {

                        fetch(this.endpoint, {
                            method:"post",
                            body: `add=${options.label}`,
                            headers:{
                                "Content-Type":"application/x-www"
                            }
                        })
                    })
                }

                fragment.querySelector(".poll__options-fill").style.width = `${ options.amountofVotes}%`;

                this.root.appendChild(fragment);
        }

    }
}


const p = new Poll (
    document.querySelector(".poll"),
    "Which do you prefer?"
);


console.log(p)