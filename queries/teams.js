const db = require("../db/dbConfig")

const getAllTeams = async () => {
    try {
        const allTeams = await db.any("SELECT * FROM teams")
        console.log(allTeams);
        return allTeams
    } catch (error) {
        return error
    }
}

const getTeamById = async (id) => {
    try {
        const team = await db.any(`SELECT * FROM teams WHERE id=$1`, id)

        console.log(team);
        return team
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllTeams,
    getTeamById,
}