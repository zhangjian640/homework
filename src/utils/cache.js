import store from './storage'

const AGENTS_KEY = '__agents__'

export function saveAgents(info) {
  store.set(AGENTS_KEY, info)
  return info
}

export function loadAgents() {
  return store.get(AGENTS_KEY)
}
