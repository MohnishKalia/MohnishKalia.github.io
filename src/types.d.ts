export type CardData = {
    type: "repo" | "ref",
    title: string
    description: string,
    repoPath?: string,
    notesPath?: string
}