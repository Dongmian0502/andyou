import React from "react";
import styled from "styled-components";
import snow1 from "/src/Image/snow/snow-1.png";
// import snow2 from "/src/Image/snow/snow-2.PNG";
import snow3 from "/src/Image/snow/snow-3.png";
import li1 from "/src/Image/li/li-1.png";
// import li2 from "/src/Image/li/li-2.PNG";
import li3 from "/src/Image/li/li-3.png";
import chian1 from "/src/Image/chian/chian-1.png";
// import chian2 from "/src/Image/chian/chian-2.PNG";
import chian3 from "/src/Image/chian/chian-3.png";
import bg from "/src/Image/bg.PNG";

const About = () => {
  return (
    <StyledRow>
      <div className="wraper">
        <h1 className="h1">三位企業寶寶的介紹</h1>
        <div className="hero ">
          <div>
            <div>
              <img className="col-lg-4" src={snow1} alt=""></img>
              <img className="col-lg-4" src={chian1} alt=""></img>
              <img className="col-lg-4" src={li1} alt=""></img>
            </div>
            <p className="hr" />
            <div className="container bg-snow img-hidden">
              <div className="row ">
                <div>
                  <img
                    className="col-lg-6 float-left snow-fix"
                    src={snow3}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 float-right text-fix">
                  <h1>
                    雪晟的小檔案：
                    <h6>
                      原型：雪梟
                      <br />
                      身高：185cm
                      <br />
                      體重：71kg
                      <br />
                      小秘密：很喜歡吃棉花糖
                      <br />
                      <br />
                    </h6>
                    <h6>
                      性格溫和、談吐有禮的他總是會被認為是暖男類型的鴞，但他其實是個隱性的腹黑毒舌男，一邊笑的溫柔、一邊說著讓人滿頭青筋的話，脾氣神經脆弱的茜總是會被他氣的找不到北，但每次都能用高超的「順毛」技術把茜哄好。
                    </h6>
                  </h1>
                </div>
              </div>
            </div>
          </div>{" "}
          <p className="hr" />
          <div className="container bg-li img-hidden">
            <div className="row ">
              <div>
                <img className="col-lg-6 float-right" src={li3} alt="" />
              </div>
              <div className="col-lg-6 float-left text-fix">
                <h1>
                  梟翊的小檔案：
                  <h6>
                    原型：雕鴞
                    <br />
                    身高：177cm
                    <br />
                    體重：69kg
                    <br />
                    小秘密：與外表不符的賢慧（廚藝、家政、天動萬象等等
                    <br />
                    <br />
                  </h6>
                  <h6>
                    面部線條冷峻，看似冷酷不近人情的他，實際上是個內心小劇場特別豐富、呆到不可一世的忠厚老實鐵憨憨，每次茜鬧起脾氣來總是站在一旁手足無措，想勸兩句卻反被聰明誤的火上添油，束手無策的僵在雪晟背後獨自吹著冷風開始上演腦內小劇場懷疑鴞生。
                  </h6>
                </h1>
              </div>
            </div>
          </div>
          <p className="hr" />{" "}
          <div className="container bg-chian img-hidden">
            <div className="row ">
              <div>
                <img className="col-lg-6 float-left" src={chian3} alt="" />
              </div>
              <div className="col-lg-6 float-left text-fix">
                <h1>
                  茜的小檔案：
                  <h6>
                    原型：倉鴞
                    <br />
                    身高：164cm
                    <br />
                    體重：48kg
                    <br />
                    小秘密：特別鍾情蘋果切半形狀的飾品
                    <br />
                    <br />
                  </h6>
                  <h6>
                    是個可愛俏麗外表與性格脾氣不成正比的女孩，個性有些傲嬌、小蠻橫，脾氣不是很好總是一點就炸，最鬧心雪晟和梟翊惹她生氣，時不時還會暗搓搓的計畫把鴞給偷偷埋了。
                  </h6>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/*     <h2>設計概念</h2>
        以貓頭鷹為主題，這是一場與三位融合日本ACG文化所創作之貓頭鷹化身的約會 */}
      </div>
      <div />
    </StyledRow>
  );
};
export default About;
const StyledRow = styled.div`
  display: inline-block;
  width: 100%;
  * {
    box-sizing: border-box;
    position: relative;
    margin: auto;
  }
  .hr {
    /* border-top: 1px dashed #fffde5; */
  }
  body::-webkit-scrollbar {
    display: none;
  }
  .div-shadow {
    box-shadow: -1px 0px 50px #333333;
    -webkit-box-shadow: -1px 0px 50px #333333;
    -moz-box-shadow: -1px 0px 50px #333333;
  }
  .hero {
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .bg-white {
    background-color: #d5a26f;
  }
  .container {
    max-width: auto;
    height: 510px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
    /* justify-content: center; */
  }
  .img-hidden {
    overflow: hidden;
  }
  .col-lg-4 {
    width: 33.333333%;
    object-fit: cover;
  }
  .col-lg-6 {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  .row {
    margin: 0 -16px;
  }
  .float-right {
    float: right;
  }
  .float-left {
    float: left;
  }
  .bg-snow {
    background-color: #99ffff;
    /* object-fit: top; */
    width: 100%;
    height: 100%;
    /* background-image: top; */
  }
  .snow-fix {
    background-image: center;
  }
  .bg-li {
    background-color: #ffb380;
    /* object-fit: right; */
    width: 100%;
    height: 100%;
    /* background-image: top; */
  }
  .bg-chian {
    background-color: rgba(267, 188, 210, 0.5);
    /* object-fit: left; */
    width: 100%;
    height: 100%;
  }
  .wraper .h1 {
    text-align: center;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 80px;
    display: flow-root;
  }
  .text-fix {
    font-size: 25px;
  }
  .text-fix h6 {
    font-weight: 600;
  }
`;
