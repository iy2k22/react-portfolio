const ProjCard = ({ name, repo, img }) => (
    <div className="projCard">
        <h2><a href={repo}>{name}</a></h2>
        <img src={img} />
    </div>
);

export default ProjCard;