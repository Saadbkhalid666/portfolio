import {CountUp} from "../../components/CountUp/CountUp"
export const StatsNAcheivments = () =>{
    return <div className="container">
        <CountUp
  from={0}
  to={1000}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-white "
/>
    </div>
}