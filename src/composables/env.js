const env = import.meta.env

export default function useEnv() {
    const envVars = {
        ...env
    }

    return new Proxy(envVars, {
        get(target, key) {
            return target[`VITE_${key}`]
        }
    })
}