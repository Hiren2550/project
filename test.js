const currentuser = useSelector(selectCurrentUser);
const { token } = currentuser;
const [toggle, setToggle] = useState(false);
const [like, setLike] = useState(likes);
const [comment, setComment] = useState(comments);
const [commentData, setCommentData] = useState();
const [commentToggle, setCommentToggle] = useState(false);
const handleComment = () => {
  setCommentToggle(!commentToggle);
};
const addComment = (e) => {
  e.preventDefault();
  console.log(commentData);
  let newcomment = [...comment, { content: commentData }];
  setComment(newcomment);
};
const handleCommentDelete = (e, id) => {
  e.preventDefault();
  let index = comment.findIndex((comment) => comment.id === id);
  let newcomment = [...comment];
  newcomment.splice(index, 1);
  setComment(newcomment);
};
const handleLike = (e) => {
  let time;
  e.preventDefault();
  try {
    clearTimeout(time);
    setToggle(!toggle);
    if (!toggle) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
    time = setTimeout(async () => {
      const res = await fetch(
        `http://192.168.1.77:3000/api/likes/post/${post_id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: token,
          },
        }
      );
      const data = await res.json();
      console.log(data);
    }, 1000);
  } catch (error) {
    console.error("Error in like", error);
  }
};
