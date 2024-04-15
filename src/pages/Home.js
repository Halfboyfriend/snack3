import React from "react";
import Layout from "../components/Layout";
import "../assets/styles.css";
import { Button, Container, Form } from "semantic-ui-react";

function Home() {
  return (
    <Layout>
      <Container>
        <section className="py-5 mt-5">

          <h1>Snack3 Staking</h1>

          <h4 style={{maxWidth: "500px", fontSize: "16px"}}>
            Enjoy the benefits of weekly SNACKS yield, revenue share, gauges
            voting, farm yield boosting, and so much more!
          </h4>
          <p>
            <a href="/">Get Snacks</a>
          </p>
        </section>

        <section className="py-3">
          <form>
            <h3>ADD STAKE</h3>
            <div className="formula">
              <input placeholder="0" type="number" className="input-tag" required />
              <span className="balance">Balance: 0 </span>

              <p>USD</p>
            </div>

            <div className="options mt-3">
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>Max</span>
            </div>

            <h3>ADD DURATION</h3>

            <div className="formula">
              <input placeholder="0" type="number" className="input-tag" required />
              <span className="balance"> Weeks </span>

              <p>MONTHS</p>
            </div>

            <div className="options mt-3">
              <span>7</span>
              <span>12</span>
              <span>40</span>
              <span>Max</span>
            </div>

            <h3 className="mt-5">LOCK OVERVIEW</h3>

            <div style={{ textAlign: "center" }}>
            <table class="text-start" style={{margin: "auto"}}>
              <tbody>
                <tr className="mt-5">
                  <td>
                    SNACKS TO BE LOCKED
                  </td>
                  <td>
                    {" "}
                    <span style={{ color: "grey" }}> 63,000,000,000,000</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    DURATION
                  </td>
                  <td>
                    {" "}
                    <span style={{ color: "grey" }}>
                      {" "}
                      2 WEEKS
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                   UNLOCK ON
                  </td>
                  <td>
                    <span style={{ color: "grey" }}>DATE TIME</span>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>


           <div className="mt-5">
           <Button primary fluid>
              Stake
            </Button>
           </div>
          </form>
        </section>
      </Container>
    </Layout>
  );
}

export default Home;
