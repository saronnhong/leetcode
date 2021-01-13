
let scientists = {
    "e3d46de8c7194cb1a32275195c15dc07": {
        "id": "e3d46de8c7194cb1a32275195c15dc07",
        "name": "Niels Bohr",
        "specialization": "Quantum Mechanics",
        "known_for": ["Wave/Particle Duality", "Uncertainty"],
    },
    "7064c3f9c99743b2838bbd8eacafe0d6": {
        "id": "7064c3f9c99743b2838bbd8eacafe0d6",
        "name": "Max Planck",
        "known_for": "Planck's constant",
    },
    "b19e575a0d3f4151a1391452d8a47a44": {
        "id": "b19e575a0d3f4151a1391452d8a47a44",
        "name": "Jane Goodall",
        "specialization": "Apes",
    },
    "17d9d0908f454253b5337e8c1ef4b564": {
        "id": "17d9d0908f454253b5337e8c1ef4b564",
        "name": "Caroline Herschel",
        "specialization": "Stars",
    }
}

function python(pid){
    for( let key in scientists){
        if(scientists[key].id === pid){
            return console.log(scientists[key])
        }
        
    }
}

// python("e3d46de8c7194cb1a32275195c15dc07");

function python_all(group){
    let newScientists = {};
    for (let key in group){
        let temp = {};
        temp["id"] = group[key].id;
        temp["name"] = group[key].name;
        temp["specialization"] = group[key].specialization;
        temp["known_for"] = group[key].known_for;

        newScientists[group[key].id] = temp
    }
    return console.log(newScientists);
    
}
python_all(scientists);