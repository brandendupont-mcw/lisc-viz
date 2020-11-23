import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { chapters } from "../config/options";
import accessibility from "../../data/assets/accessibility.jpg";
import buildings from "../../data/assets/buildings.png";
import elevation from "../../data/assets/elevation.png";
import precip from "../../data/assets/precip.png";
import evacCenters from "../../data/assets/evac_centers.png";
import popHazard from "../../data/assets/pop_hazard.png";
import idealCoverage from "../../data/assets/ideal_coverage.png";
import sampaguita from "../../data/assets/sampaguita_gym.png";
import liscLogo from "../../data/assets/lisc-logo.png";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  setActiveChapter = (newChapter) => {
    const { chapterName, updateChapter } = this.props;

    if (newChapter === chapterName) return;

    document.getElementById(newChapter).setAttribute("class", "active");
    document.getElementById(chapterName).setAttribute("class", "");

    updateChapter(newChapter);
  };

  isElementOnScreen = (id) => {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  };

  handleScroll = (e) => {
    const chapterNames = Object.keys(chapters);
    let i;

    for (i = 0; i < chapterNames.length; i += 1) {
      const chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  };

  render() {
    return (
      <div id="features" onScroll={this.handleScroll}>
        <section id="marikina" className="active">
          <Typography variant="h3">Property Dynamics in Milwaukee</Typography>
          <Typography>
            This is an interactive version of a full length study on Milwaukee
            Property Dynamics. The full report can be found{" "}
            <span class="highlight">here</span>. Scroll to proceed.
          </Typography>

          <br></br>
          <Typography variant="h5">Findings</Typography>
          <Typography>
            <b>
              1. Some neighborhoods are seeing notable gains in property value,
              while many others are disproportionately falling behind.
            </b>
            <p>
              Properties along the lakefront and on the western edges of the
              city are seeing rapid increase in value. Meanwhile, other
              neighborhoods are not keeping pace.
            </p>
            <b>
              2. Neighborhoods where landlords make the{" "}
              <span class="highlight">greatest profits</span> are also some of
              the <span class="highlight">most distressed </span>housing
              markets.
            </b>
            <p>
              Because rent prices don’t necessarily correspond to structure
              value, landlords are profiting from the poor and from
              neighborhoods where buildings are cheap.
            </p>
            <b>
              3. Gathering additional data can help us better understand how to
              improve neighborhoods.
            </b>
            <p>
              Being able to visualize data helps us understand, prioritize and
              more efficiently use the resources we have to improve quality of
              life for all residents.
            </p>
          </Typography>

          <img class="figure" src={liscLogo} alt="lisc logo"></img>
          <Typography>
            {" "}
            <h3> July 2020</h3>
          </Typography>
        </section>
        <section id="land">
          <Typography variant="h3">What is this report about?</Typography>
          <Typography>
            Milwaukee, alongside other Midwestern cities, is currently at a
            critical point in its history.
          </Typography>
          <br></br>
          <Typography>
            You’ve probably heard the saying that the three most important
            factors in real estate are “location, location, location.” What this
            tells us is that the value of a property is subjective - at the end
            of the day, a building is worth what someone else will pay for it.
            However, it is important to understand that this willingness to pay
            doesn’t occur in a vacuum - in a country obsessed with race and
            class, it is inevitable that these factors play an outsize part in
            shaping the market.
          </Typography>
          <br></br>
          <Typography>
            The fact that America is extremely segregated by race and income is
            no accident. The federal government, realtors, and buyers themselves
            have actively pursued a variety of policies that cumulatively led to
            neighborhoods segregated by race and class, most of which was
            completely legal, and some of which continues to this day.
          </Typography>
          <br></br>
          <Typography>
            Milwaukee is no exception. Even a brief drive around the city will
            starkly show that increasing home values and reinvestment are not
            occurring everywhere equally. There are 'hot' housing markets in
            some areas, with increasing values, and a decline in housing prices
            in 'cold' housing markets elsewhere.
          </Typography>
          <br></br>
          <Typography>
            Residents in both areas have concerns - loss of value and lack of
            bank lending/investment in 'cold' areas, and displacement and
            extremely rapid neighborhood change in 'hot' areas.
          </Typography>
          <br></br>
          <Typography>
            The purpose of this report is to use data to look into these
            invisible forces (the property market and evictions) more deeply, as
            a starting point. The goal is to show what’s happening in
            neighborhoods as well as provide a blueprint toward a brighter, more
            equitable future in whichever neighborhood you call home.
          </Typography>
        </section>
        <section id="typhoon">
          <Typography variant="h3">Redlining</Typography>
          <Typography>
            Between 1935 and 1940, the federal government (via the Home Owners’
            Loan Corporation, or HOLC) graded neighborhoods throughout America
            on an A through D scale.
          </Typography>
          <br></br>
          <Typography>
            The effort was intended to quantify how safe or risky a neighborhood
            was for banks and others who might be approached about lending money
            in an area - for example if a family wanted to take out a mortgage
            to buy a house, or if a business wanted a loan to fix up their
            building.
          </Typography>
          <br></br>
          <Typography>
            Among the criteria used to inform these ratings (such as data like
            recent home sales and rent amounts) was the race/ ethnicity of
            residents in that area. The reasons for doing so were rooted in a
            long tradition of systemic racism and justified by flawed research
            which supported these views.
          </Typography>
          <br></br>
          <Typography>
            The problem with factoring race as heavily as the HOLC did into the
            gradings of neighborhoods was that any areas with minority
            populations were almost automatically dropped into the lowest
            grades.
          </Typography>
          <br></br>
          <Typography>
            This meant that in practice, huge swaths of American cities were
            starved of credit, effectively cutting these areas off from future
            investment.
          </Typography>
          <br></br>
          <Typography>
            The legacy of this practice is still clearly visible in our cities
            today, and the harm that it inflicted on minority communities is
            incalculable.
          </Typography>
        </section>
        <section id="evacuation">
          <Typography variant="h3">Evacuation</Typography>
          <Typography>
            Completely unaware, many families in low lying areas were stranded
            in their upper floors while others climbed to their roofs. In
            Marikina, around 14 to 23 available schools and evacuation centers
            took people in, as well as some churches. While many scrambled to
            these locations as it rained, there were anecdotal reports that some
            of these experienced flooding as well. As we prepare for more
            typhoons and monsoon rains like those brought by Ondoy,{" "}
            <span class="highlight">
              how suitable are the current evacuation centers and their
              locations in sheltering Marikina’s citizens from peril?
            </span>
          </Typography>
          <br></br>
          <Typography>
            First, let’s look at what the current evacuation centers are like.
            Like most cities in the Philippines, Marikina converts its
            elementary schools, high schools and covered basketball courts into
            temporary shelters during typhoons.
          </Typography>
          <br></br>
          <img
            class="figure"
            src={evacCenters}
            alt="Distribution of buildings in Marikina"
          ></img>
          <br></br>
          <Typography>
            While these buildings might seem practical for a few days of stay,
            there are always concerns whether there is{" "}
            <span class="highlight">
              enough space and provisions for privacy, proper sanitation and
              healthcare
            </span>
            . This is especially true for evacuees who cannot easily return to
            their homes and would require further recovery assistance.
          </Typography>
          <br></br>
          <Typography variant="h6">HAZARD EXPOSURE</Typography>
          <Typography>
            Twelve evacuation centers are located in medium to high hazard areas
            for a 5-year flood return period, almost a third of their number.
            This jumps to 21 evacuation centers for a 100-year return period,
            fifteen of which are schools. While many of these schools are
            multi-storey buildings with at least 3-4 floors, evacuees in these
            shelters can still get stranded and make them unable to access other
            critical facilities nearby.
          </Typography>
        </section>
        <section id="population">
          <Typography variant="h3">Population</Typography>
          <Typography>
            Marikina City has 450,741 citizens.{" "}
            <span class="highlight">
              How many of them are exposed to flooding hazard?
            </span>
          </Typography>
          <br></br>
          <img
            class="figure"
            src={popHazard}
            alt="Distribution of exposed population per return period"
          ></img>
          <br></br>
          <Typography>
            If we look at the flood hazard for a 5-year return period, around{" "}
            <span class="highlight">
              47% of the population are exposed to high and medium hazards
            </span>
            , which is already a sizeable number of people. This percentage
            jumps to <span class="highlight">65%</span> and{" "}
            <span class="highlight">69%</span> of the population for the 25- and
            100-year return periods, respectively.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">
              Can these people easily go to a nearby evacuation center?
            </span>{" "}
            And if they can,{" "}
            <span class="highlight">
              will there be enough space and other provisions?
            </span>
          </Typography>
        </section>
        <section id="coverage">
          <Typography variant="h3">Ideal Coverage</Typography>
          <Typography>
            If we draw <span class="highlight">400 m</span> circles around each
            evacuation center, the map shows how many people can reach them
            within an acceptable walking distance. What do these mean? We can
            consider these as the{" "}
            <span class="highlight">
              ideal number of people that each evacuation center should be able
              to shelter
            </span>{" "}
            in times of disaster. Currently, <span class="highlight">86%</span>{" "}
            of the population are in close proximity to at least one evacuation
            center.
          </Typography>
          <br></br>
          <img
            class="figure"
            src={idealCoverage}
            alt="Population covered within 400 meters"
          ></img>
          <br></br>
          <Typography>
            There are also many evacuation centers that{" "}
            <span class="highlight">overlap ideal coverage</span>, which can be
            a good thing for citizens. There are around{" "}
            <span class="highlight">35%</span> of the population with at least
            two evacuation centers nearby, and{" "}
            <span class="highlight">3% of them are near to four shelters</span>.
            And if we look at the map, these clusters of evacuation centers are
            nicely located in relatively population dense areas, suggesting good
            coverage and availability of options.
          </Typography>
        </section>
        <section id="capacity">
          <Typography variant="h3">Estimated Capacity</Typography>
          <Typography>
            Now that we know the ideal number of people that each evacuation
            center should serve,{" "}
            <span class="highlight">how many can they actually fit?</span> We
            got the total floor areas and computed for the estimated number of
            people that can comfortably stay in these shelters (
            <span class="highlight">5 sqm of space per person</span>). All
            locations had an estimated capacity{" "}
            <span class="highlight">way below their ideal coverage</span>, which
            means there won’t be enough space if everyone within close proximity
            have to evacuate. On average, there is a sizeable difference of
            around <span class="highlight">10,416 people</span> that will be
            underserved per evacuation center.
          </Typography>
          <br></br>
          <img
            class="figure"
            src={sampaguita}
            alt="Sampaguita Gym in Marikina"
          ></img>
          <br></br>
          <Typography>
            To illustrate some of these differences, here is{" "}
            <span class="highlight">Sampaguita Gym</span> with an estimated
            capacity of only <span class="highlight">123 people</span>{" "}
            evacuating and staying comfortably within its vicinity. However,
            because of the dense population within close proximity, it needs to
            serve <span class="highlight">168 times more people</span>. While
            Malanday National HS, Malanday Elementary School and Filipinas Gym
            are other nearby options, they too are well below their capacities,
            with <span class="highlight">Filipinas Gym</span> expected to
            shelter <span class="highlight">127 times more</span>.{" "}
            <i>(Photo credit: Google Streetview)</i>
          </Typography>
        </section>
        <section id="accessibility">
          <Typography variant="h3">Accessibility</Typography>
          <Typography>
            We also looked into the accessibility of the evacuation centers by
            generating isochrones that represent{" "}
            <span class="highlight">
              areas that can be reached from 5 to 30 minutes
            </span>
            . It can be seen from the map that all evacuation centers can
            already be reached by the majority of the population in{" "}
            <span class="highlight">15 minutes</span>, which is beneficial for
            urgent evacuations at the onset of a heavy downpour. However, these
            isochrones cannot account for the effects of flooding on one’s
            walking speed if evacuations will happen during a deluge.
          </Typography>
          <br></br>
          <img
            class="figure"
            src={accessibility}
            alt="People walking on flooded roads"
          ></img>
          <br></br>
          <i>
            (Photo credit:{" "}
            <a
              class="fig-caption"
              href="http://archive.boston.com/bigpicture/2009/09/typhoon_ketsana_ondoy.html"
              target="_blank"
            >
              boston.com
            </a>
            )
          </i>
        </section>
        <section id="suitability">
          <Typography variant="h3">Suitability</Typography>
          <Typography>
            By considering the various factors such as{" "}
            <span class="highlight">
              flood hazard level, land elevation, land cover, accessibility to
              road networks and the maximum population coverage of an evacuation
              center
            </span>
            , we derived a suitability score for each area. The suitability
            score gives us an idea of how ideal a certain area is for an
            evacuation center to be built to be able to minimize the risks.
          </Typography>
          <br></br>
          <Typography>
            The basis of the suitability score varied depending on the flood
            hazard level to be able to factor in cases of high-rising flood and
            low-rising flood. If we look at the suitability map for a 5-year
            return period,{" "}
            <span class="highlight">
              over 52% of the city has low to very low suitability
            </span>
            . The percentage increases to approximately{" "}
            <span class="highlight">64%</span> and{" "}
            <span class="highlight">69%</span> for the 25- and 100-year return
            periods respectively.
          </Typography>
          <br></br>
          <Typography>
            Out of the 28 evacuation centers,{" "}
            <span class="highlight">only 3 evacuation centers</span> will be in
            very high suitability areas up until the 100-year return period.
            There are 13 which would stay in high suitability areas, but the
            remaining 12 will be in low suitability areas by the 100-year return
            period.
          </Typography>
        </section>
        <section id="good-place">
          <Typography variant="h3">The Good Places</Typography>
          <Typography>
            Despite a large area of Marikina considered to have low suitability
            for flood evacuation centers, there are some large{" "}
            <span class="highlight">very high suitable areas</span> that we can
            notice. The largest area is found in the neighborhood of{" "}
            <span class="highlight">Marikina Heights</span> at the eastern side
            of the city. This area is composed of mountains and numerous narrow
            alleys which act as <span class="highlight">catch basins</span>{" "}
            during the floods. In the recent flooding due to Typhoon Karding,
            this area reported no flooding possibly due to its{" "}
            <span class="highlight">topographical characteristics</span> and{" "}
            <span class="highlight">developed facilities</span> like drainage
            and pumping stations to accommodate the{" "}
            <span class="highlight">high population</span>.
          </Typography>
          <br></br>
          <Typography>
            The second largest very high suitable area is found at the western
            side of the Marikina River with{" "}
            <span class="highlight">Ateneo De Manila University</span> as a
            neighbor on the west. The university area is{" "}
            <span class="highlight">
              almost entirely covered in grass with some scattered trees
            </span>
            . Compared to other areas{" "}
            <span class="highlight">right beside the river</span>, this area has
            a <span class="highlight">higher elevation</span> and experiences{" "}
            <span class="highlight">very little flooding</span>.
          </Typography>
          <br></br>
          <Typography>
            On the other side of the Marikina River, another very high suitable
            area can be observed and it is{" "}
            <span class="highlight">relatively closer to the river</span>{" "}
            compared to the previous area mentioned. Aside from its relatively{" "}
            <span class="highlight">large concentration of people</span>, the
            high suitability score could be attributed to{" "}
            <span class="highlight">numerous passable roads</span> and spots of{" "}
            <span class="highlight">greenery</span> contributed by golf lots,
            sports complexes and other leisure accommodations within the
            vicinity.
          </Typography>
        </section>
        <section id="conclusion">
          <Typography variant="h3">Moving Forward</Typography>
          <Typography>
            In this analysis of Marikina's evacuation centers, we have
            illustrated how unsuitable many of them are in terms of their{" "}
            <span class="highlight">medium to high exposure to flooding</span>{" "}
            and{" "}
            <span class="highlight">incapacity to serve nearby residents</span>.
            We then tried to look into the suitability of other areas, hoping to
            find{" "}
            <span class="highlight">
              viable locations for new evacuation centers
            </span>
            . We found Marikina Heights as the most viable location for
            evacuation centers. But anything built there cannot serve other
            densely populated areas.
          </Typography>
          <br></br>
          <Typography>
            What about other suitable locations that are already built up land?
            There is always the option of finding existing buildings other than
            schools and covered courts that can also serve as shelters. However,
            we highly suggest that Marikina explore{" "}
            <span class="highlight">developing multipurpose buildings</span>{" "}
            like those built in Singapore to account for the lack of space in
            many residential areas.
          </Typography>
          <br></br>
          <Typography>
            While Marikina can be lauded in the herculean task of effectively
            instituting information campaigns and building flood control
            infrastructures, it is also important that they look into critical
            infrastructures that are heavily utilized at the onset, during and
            soon after a typhoon or flooding. Although these are temporary
            relief, evacuees' experiences in these shelters will definitely set
            the tone for their successful return and recovery.
          </Typography>
          <br></br>
          <Typography variant="h6">WINNINGS</Typography>
          <Typography>
            This interactive "scrollytelling" won{" "}
            <span class="highlight">GRAND PRIZE</span>🏆 and the{" "}
            <span class="highlight">Best Interaction Design</span>🎖 award for
            the <span class="highlight">#VizRisk Challenge</span>! Read the
            announcement of winners from the{" "}
            <a
              href="https://blogs.worldbank.org/opendata/visualizing-risk-announcing-winners-vizrisk-2019-challenge"
              target="_blank"
            >
              World Bank Group
            </a>
            .
          </Typography>
          <br></br>
          <Typography variant="h6">THE TEAM</Typography>
          <Typography>
            This is the proud work of{" "}
            <span class="highlight">Briane Paul V. Samson</span> from{" "}
            <a href="https://www.fun.ac.jp/en/" target="_blank">
              Future University Hakodate
            </a>{" "}
            &amp;{" "}
            <a href="https://www.dlsu.edu.ph/" target="_blank">
              De La Salle University
            </a>{" "}
            and <span class="highlight">Unisse C. Chua</span> from{" "}
            <a href="https://www.dlsu.edu.ph/" target="_blank">
              De La Salle University
            </a>
            . They are both from the{" "}
            <a href="https://comet.dlsu.edu.ph" target="_blank">
              Center for Complexity and Emerging Technologies
            </a>{" "}
            in De La Salle University, Philippines. This wouldn't be possible
            without the help of Winfred Villaluna, Darlene Marpa, Tyler Venzon
            and Benson Polican in collecting and processing parts of the data.
          </Typography>
          <br></br>
          <Typography variant="h6">CODE</Typography>
          <Typography>
            If you are interested in replicating our work, you can clone our{" "}
            <a href="https://github.com/dlsucomet/riesgo-vis" target="_blank">
              GitHub repository
            </a>
            .
          </Typography>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
