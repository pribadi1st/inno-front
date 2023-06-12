import React, {useState, useEffect} from "react"
import { useQuery } from '@tanstack/react-query'
import axios from '../../utils/axios'
import INewsDetail from "./card/type";
import Card from "./card";
const News = () => {
  const [newsList, setNewsList] = useState([])
  const { isLoading, data } = useQuery({
    queryKey: ["news"],
    queryFn: () => 
      axios.get("/news").then(res => {
        if(res.data.status === 200) setNewsList(res.data.data)
        return res.data
      })
  })
  
  return (
    <div className="flex items-center flex-col gap-5 w-full">
      <h1 className="text-2xl">Current News</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full">
        {isLoading ? (
          <div> Is Loading</div>
        ) : newsList.map((detail: INewsDetail) => (
          <Card detail={detail} key={detail.id}/>
        ))}
      </div>
    </div>
  );
};
export default News;