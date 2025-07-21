import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const posts = [
        { id: 1, title: "첫 번째 글입니다." },
        { id: 2, title: "두 번째 글입니다." },
    ];

    return (
        <div>
            <h1>기술 블로그</h1>
            <button onClick={() => navigate("/write")}>Write</button>

            <ul>
                {posts.map((post) => (
                    <li
                        key={post.id}
                        style={{ cursor: "pointer", margin: "10px 0" }}
                        onClick={() => navigate(`/${post.id}`)}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
