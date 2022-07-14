export const goToCharacterListPage = (history) => {
    history.push("/")
}

export const goToCharacterDetailPage = (history, name) => {
    history.push(`/detalhes/${name}`)
}