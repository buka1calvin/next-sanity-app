import { PortableTextBlock } from "sanity";


type projectProps={
    _id:string;
    name:string;
    slug:string;
    _createdAt:Date;
    image:string;
    url:string;
    content:PortableTextBlock[];
}