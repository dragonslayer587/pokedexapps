import type { APIRoute } from "astro"
import { getPokemonList } from "../../../services/pokemon"

export const GET: APIRoute = async (context) => {
  return new Response(JSON.stringify(getPokemonList), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}

export const POST: APIRoute = async (context) => {
  return new Response(null, {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}