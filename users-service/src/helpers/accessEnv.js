//? Accesses a variable inside of process.env
//? Hrow an error if it's not found
//? Caching the values i,proves performance - accessing process.env may times is bad!! 😞 

const cache = {}

const accessEnv = (key, defaultValue) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue
    throw new Error(`${key} not found in process.env!`)
  }

  if (cache[key]) return cache[key]

  cache[key] = process.env[key]

  return process.env[key]
}

export default accessEnv