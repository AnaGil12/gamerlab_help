import type { Game, RatingCriterion, Rating } from "../types/types"

export const mockGames: Game[] = [
  {
    id: "1",
    name: "Puffle pop",
    teamName: "Los mejores gamers",
    logo: "/placeholder.svg?height=80&width=80",
    subject: "IST2103",
    description: "Un juego divertido y colorido donde debes hacer estallar puffles para ganar puntos.",
    nrc: "2225",
    rating: 5,
    teamMembers: ["Vanessa Diaz", "Franklin Amador", "Zharick Oviedo"],
  },
  {
    id: "2",
    name: "Shadow Pulse",
    teamName: "UniGamers",
    logo: "/placeholder.svg?height=80&width=80",
    subject: "MAT222",
    description:
      "Shadow Pulse es un juego de acción furtiva en un mundo cyberpunk donde la luz es tu enemiga y el pulso eléctrico, tu única arma. Asumes el papel de una agente encubierta con la capacidad de manipular señales electromagnéticas para infiltrarte en instalaciones ultra vigiladas, desactivar sistemas de seguridad y eliminar enemigos sin ser detectada.",
    nrc: "2225",
    rating: 4,
    teamMembers: ["Vanessa Diaz", "Franklin Amador", "Zharick Oviedo"],
  },
  {
    id: "3",
    name: "IronHowl",
    teamName: "Warriors",
    logo: "/placeholder.svg?height=80&width=80",
    subject: "MAT333",
    description: "Un juego de estrategia y combate medieval donde debes liderar tu ejército a la victoria.",
    nrc: "2226",
    rating: null,
    teamMembers: ["Carlos Mendez", "Maria Lopez", "Juan Rodriguez"],
  },
]

export const ratingCriteria: RatingCriterion[] = [
  {
    id: "interface",
    name: "Interfaz de Usuario",
    description: "Diseño, colores, usabilidad",
  },
  {
    id: "interaction",
    name: "Interacción",
    description: "Controles, guía al usuario, intuitividad",
  },
  {
    id: "results",
    name: "Resultados",
    description: "Reacciones, recompensas, retroalimentación visual",
  },
  {
    id: "presentation",
    name: "Presentación del Proyecto",
    description: "Claridad, coherencia, comunicación del objetivo",
  },
  {
    id: "functionality",
    name: "Funcionamiento del Programa",
    description: "Que no tenga errores y cumpla su propósito",
  },
  {
    id: "teamPresentation",
    name: "Presentación personal del equipo",
    description: "Lenguaje corporal, presencia, orden y seguridad al exponer",
  },
]

export const mockRatings: Rating[] = [
  {
    id: "1",
    gameId: "1",
    criteria: {
      interface: 5,
      interaction: 5,
      results: 5,
      presentation: 5,
      functionality: 5,
      teamPresentation: 5,
    },
    comments: "Excelente juego, muy divertido y bien implementado.",
    timestamp: "17/04/2025 12:30pm",
  },
  {
    id: "2",
    gameId: "2",
    criteria: {
      interface: 4,
      interaction: 3,
      results: 5,
      presentation: 5,
      functionality: 5,
      teamPresentation: 4,
    },
    comments:
      "El juego destaca por su interfaz atractiva y fácil de usar, con una interacción intuitiva que guía muy bien al jugador. Los resultados están bien logrados, con retroalimentación visual y recompensas claras. La presentación del proyecto fue clara y coherente, y el programa funcionó sin errores. Además, el equipo mostró seguridad y orden al exponer. ¡Muy buen trabajo!",
    timestamp: "17/04/2025 12:35pm",
  },
]
