import { api } from "src/boot/axios"
import { ref } from "vue"

async function useGameAPI(game) {
    const apiKey = 'd59cc84aafb94cb2a81af88486b9c766'

    try {
        const result = await api.get(`https://api.rawg.io/api/games/${game}?key=${apiKey}`)

        if(result.status !== 200) {
            console.log(result)
            throw new Error('Network Error')
        }

        return result.data
    } catch(err) {
        return 'error'
    }
}

export { useGameAPI }