const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
     villians: [
        {
            id: 1,
            name: "frosty",
            power: "frost blast"
        },
        {
            id: 2,
            name: "jugg",
            power: "armor"
        }
    ]
        }

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}