import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("작성된 글:", { title, content });

        // 여기서 백엔드로 POST 요청 보내기

        navigate("/"); // 작성 후 메인으로 이동
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>글 작성하기</h2>
            <input
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <button type="submit">작성 완료</button>
        </form>
    );
};

export default WritePost;
