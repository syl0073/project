import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState(`기존 제목 ${id}`);
    const [content, setContent] = useState("기존 내용입니다.");

    const handleEdit = (e) => {
        e.preventDefault();
        console.log("수정된 글:", { id, title, content });

        // PUT 요청 보내기

        navigate(`/${id}`);
    };

    return (
        <form onSubmit={handleEdit}>
            <h2>글 수정하기</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <button type="submit">수정 완료</button>
        </form>
    );
};

export default EditPost;
