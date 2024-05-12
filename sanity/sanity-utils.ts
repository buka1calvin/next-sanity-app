import { projectProps } from "@/types/project"
import { createClient, groq } from "next-sanity"

export const getAllProject=async():Promise<projectProps[]>=>{
    const client=createClient({
        projectId: "jx9lbmtw",
        dataset: "production",
        apiVersion: "2024-05-10",
        useCdn:false
    })

    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )
}