export default function SideNote({ children }) {
  return (
    <>
      <style jsx>
        {`
   /*Marginal Notes on Desktop*/
   aside, .aside {
      display: inline;
    float: right;
    position: relative;
    width: 20vw;
    margin-right: -24vw;
    font-size: 16px;
    color:#333;
   }

   /*Marginal Notes on mobile*/
   @media (max-width: 768px) {
        aside, .aside {
        display: block;
     float: none;
     margin: 5% 10% 5% 10%;
     width: 80%;
     font-size: 15px;
     color:#333;
    }
      `}
      </style>
      <span className="aside">{children}</span>
    </>
  );
}
