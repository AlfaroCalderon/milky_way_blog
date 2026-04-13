export type BlogPost = {
    user_id: number
    post_title: string
    summary: string
    author:  string 
    category: string
    img_url: string 
    main_content: string 
}

export type Comment = {
    user_id: number
    post_id: number
    comment: string
}