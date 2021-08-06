import "./social.css";
const TwitterApi = (props) => {
  return (
    <div>
      <a
        className="twitter-share-button twitter"
        // href="https://twitter.com/intent/tweet?text=Hello world Bryan"
        href={`https://twitter.com/intent/tweet?text="${props.message}" -${props.author}`}
        hashtags="100DaysOfCode"
        target="_blank"
        rel="noreferrer"
        title="tweet this quote!"
      >
        <i class="fab fa-twitter-square" style={{ color: props.styling }}></i>
      </a>
    </div>
  );
};
export default TwitterApi;
