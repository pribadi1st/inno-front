import INewsDetail from "./type"

const Card = ( props: {detail:INewsDetail}) => {
    const {detail} = props
    return (
        <div className="flex flex-col gap-2">
            <img src={detail.imageUrl} className="rounded-[8px] md:h-[250px] " />
            <h6 className="text-3xl line-clamp-1">{detail.title}</h6>
            <div className="flex flex-col">
                <p>Category: {detail.category_id}</p>
                <p>Author: {detail.category_id}</p>
                <p className="text-2sm line-clamp-2">{detail.content}</p>
            </div>
        </div>
    )
}

export default Card