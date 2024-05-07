import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../../organisms/ArticleCard/ArticleCard";
import Pagination from "../../molecules/Pagination/Pagination";
import Loader from "../../atoms/Loader/Loader";
import { Article } from "../../utils/types/types";
import { useAppSelector } from "../../utils/redux/hooks/hooks";
import "./news-page.css";

const NewsPage = () => {
  const [response, setResponse] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const token = useAppSelector((state) => state.auth.token);

  const authPosts = axios.create({
    baseURL: "https://backend-practice.euriskomobility.me",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const getPosts = async (page: number) => {
    try {
      setLoading(true);
      const res = await authPosts.get(`/posts?page=${page}&pageSize=10`);
      const results = res.data.results;
      setResponse(results);
      setTotalPages(res.data.pagination.totalPages);
      return await results;
    } catch (err) {
      console.log("eeee", err);
      // window.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
    getPosts(page);
  };

  useEffect(() => {
    getPosts(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="news-page">
        {loading ? (
          <Loader />
        ) : (
          response.map((post) => <ArticleCard data={post} />)
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePage={handlePage}
      />
    </>
  );
};

export default NewsPage;
