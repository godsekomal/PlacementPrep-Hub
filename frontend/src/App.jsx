import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentDashboard from "./pages/student/StudentDashboard";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import AppliedJobs from "./pages/student/AppliedJobs";
import Aptitude from "./pages/student/Aptitude";
import WeeklyReport from "./pages/student/WeeklyReport";
import AIFeedback from "./pages/student/AIFeedback";
import InterviewPractice from "./pages/student/InterviewPractice";
import InterviewWeeklyReport from "./pages/student/InterviewWeeklyReport";
import StudentProfile from "./pages/student/StudentProfile";
import QuantitativeAptitude from "./pages/student/QuantitativeAptitude";
import Percentage from "./pages/student/Percentage";
import ProfitLoss from "./pages/student/ProfitLoss";
import Average from "./pages/student/Average";
import TimeWork from "./pages/student/TimeWork";
import TimeSpeedDistance from "./pages/student/TimeSpeedDistance";
import RatioProportion from "./pages/student/RatioProportion";
import SimpleInterest from "./pages/student/SimpleInterest";
import CompoundInterest from "./pages/student/CompoundInterest";
import PermutationCombination from "./pages/student/PermutationCombination";
import Probability from "./pages/student/Probability";
import NumberSystem from "./pages/student/NumberSystem";
import HCFLCM from "./pages/student/HCFLCM";
import DataInterpretation from "./pages/student/DataInterpretation";
import BarGraph from "./pages/student/BarGraph";
import PieChart from "./pages/student/PieChart";
import TableDI from "./pages/student/TableDI";
import LineGraph from "./pages/student/LineGraph";
import LogicalReasoning from "./pages/student/LogicalReasoning";
import CodingDecoding from "./pages/student/CodingDecoding";
import BloodRelation from "./pages/student/BloodRelation";
import DirectionSense from "./pages/student/DirectionSense";
import SeatingArrangement from "./pages/student/SeatingArrangement";
import Puzzle from "./pages/student/Puzzle";
import Syllogism from "./pages/student/Syllogism";
import VerbalReasoning from "./pages/student/VerbalReasoning";
import StatementConclusion from "./pages/student/StatementConclusion";
import StatementAssumption from "./pages/student/StatementAssumption";
import CauseEffect from "./pages/student/CauseEffect";
import AssertionReason from "./pages/student/AssertionReason";
import LogicalSequence from "./pages/student/LogicalSequence";
import VerbalAbility from "./pages/student/VerbalAbility";
import ReadingComprehension from "./pages/student/ReadingComprehension";
import SentenceCorrection from "./pages/student/SentenceCorrection";
import SynonymsAntonyms from "./pages/student/SynonymsAntonyms";
import ErrorDetection from "./pages/student/ErrorDetection";
import FillBlanks from "./pages/student/FillBlanks";
import PlacementResources from "./pages/student/PlacementResources";
import QuantFormulaSheet from "./pages/student/QuantFormulaSheet";
import ShortcutTricks from "./pages/student/ShortcutTricks";
import PreviousYearAptitude from "./pages/student/PreviousYearAptitude";
import ArraysResource from "./pages/student/ArraysResource";
import StringsResource from "./pages/student/StringsResource";
import LinkedListResource from "./pages/student/LinkedListResource";
import StackQueueResource from "./pages/student/StackQueueResource";
import TreesResource from "./pages/student/TreesResource";
import GraphsResource from "./pages/student/GraphsResource";
import SortingResource from "./pages/student/SortingResource";
import HRQuestions from "./pages/student/interview/HRQuestions";
import TechnicalQuestions from "./pages/student/interview/TechnicalQuestions";
import SelfIntroduction from "./pages/student/interview/SelfIntroduction";
import GDTips from "./pages/student/interview/GDTips";
import CommunicationSkills from "./pages/student/interview/CommunicationSkills";
import LinkedInProfile from "./pages/student/career/LinkedInProfile";
import GitHubPortfolio from "./pages/student/career/GitHubPortfolio";
import InternshipPreparation from "./pages/student/career/InternshipPreparation";
import ResumeTips from "./pages/student/ResumeTips";
import PlacementRoadmap from "./pages/student/PlacementRoadmap";
import Contact from "./pages/Contact";
import Companies from "./pages/student/Companies";
import Accenture from "./pages/company/Accenture";
import Capgemini from "./pages/company/Capgemini";
import IBM from "./pages/company/IBM";
import Cognizant from "./pages/company/Cognizant";
import Infosys from "./pages/company/Infosys";
import TCS from "./pages/company/TCS";
import LTI from "./pages/company/LTI";
import Deloitte from "./pages/company/Deloitte";
import Oracle from "./pages/company/Oracle";
import MindTree from "./pages/company/MindTree";
import Comviva from "./pages/company/Comviva";
import DXC from "./pages/company/DXC";
import CGI from "./pages/company/CGI";
import HCL from "./pages/company/HCL";
import Qualcomm from "./pages/company/Qualcomm";
import HSBC from "./pages/company/HSBC";





export default function App() {
  return (
    <Routes>
      {/* ✅ Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      

      {/* ✅ Student Routes */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/applied-jobs"
        element={
          <ProtectedRoute role="student">
            <AppliedJobs />
          </ProtectedRoute>
        }
      />

      {/* ✅ Aptitude Route */}
      <Route
  path="/student/aptitude"
  element={
    <ProtectedRoute role="student">
      <Aptitude />
    </ProtectedRoute>
  }
/>
      <Route
  path="/quantitative-aptitude"
  element={<QuantitativeAptitude />}
/>
<Route
  path="/percentage"
  element={<Percentage />}
/>
<Route
  path="/profit-loss"
  element={<ProfitLoss />}
/>
<Route
  path="/average"
  element={<Average />}
/>
<Route
  path="/time-work"
  element={<TimeWork />}
/>
<Route path="/time-speed-distance" element={<TimeSpeedDistance />} />
<Route path="/ratio-proportion" element={<RatioProportion />} />
<Route path="/simple-interest" element={<SimpleInterest />} />
<Route path="/compound-interest" element={<CompoundInterest />} />
<Route path="/permutation-combination" element={<PermutationCombination />} />
<Route path="/probability" element={<Probability />} />
<Route path="/number-system" element={<NumberSystem />} />
<Route path="/hcf-lcm" element={<HCFLCM />} />
<Route
  path="/data-interpretation"
  element={
    <ProtectedRoute role="student">
      <DataInterpretation />
    </ProtectedRoute>
  }
/>
<Route
  path="/bar-graph"
  element={
    <ProtectedRoute role="student">
      <BarGraph />
    </ProtectedRoute>
  }
/>
<Route
  path="/pie-chart"
  element={
    <ProtectedRoute role="student">
      <PieChart />
    </ProtectedRoute>
  }
/>
<Route
  path="/table-di"
  element={
    <ProtectedRoute role="student">
      <TableDI />
    </ProtectedRoute>
  }
/>
<Route
  path="/line-graph"
  element={
    <ProtectedRoute role="student">
      <LineGraph />
    </ProtectedRoute>
  }
/>
<Route
  path="/logical-reasoning"
  element={
    <ProtectedRoute role="student">
      <LogicalReasoning />
    </ProtectedRoute>
  }
/>

<Route
  path="/coding-decoding"
  element={
    <ProtectedRoute role="student">
      <CodingDecoding />
    </ProtectedRoute>
  }
/>
<Route
  path="/blood-relation"
  element={
    <ProtectedRoute role="student">
      <BloodRelation />
    </ProtectedRoute>
  }
/>
<Route
  path="/direction-sense"
  element={
    <ProtectedRoute role="student">
      <DirectionSense />
    </ProtectedRoute>
  }
/>
<Route
  path="/seating-arrangement"
  element={
    <ProtectedRoute role="student">
      <SeatingArrangement />
    </ProtectedRoute>
  }
/>
<Route
  path="/statement-conclusion"
  element={
    <ProtectedRoute role="student">
      <StatementConclusion />
    </ProtectedRoute>
  }
/>

<Route
  path="/statement-assumption"
  element={
    <ProtectedRoute role="student">
      <StatementAssumption />
    </ProtectedRoute>
  }
/>

<Route
  path="/puzzle"
  element={
    <ProtectedRoute role="student">
      <Puzzle />
    </ProtectedRoute>
  }
/>

<Route
  path="/syllogism"
  element={
    <ProtectedRoute role="student">
      <Syllogism />
    </ProtectedRoute>
  }
/>
<Route
  path="/verbal-reasoning"
  element={
    <ProtectedRoute role="student">
      <VerbalReasoning />
    </ProtectedRoute>
  }
/>
<Route
  path="/cause-effect"
  element={
    <ProtectedRoute role="student">
      <CauseEffect />
    </ProtectedRoute>
  }
/>
<Route
  path="/assertion-reason"
  element={
    <ProtectedRoute role="student">
      <AssertionReason />
    </ProtectedRoute>
  }
/>

<Route
  path="/logical-sequence"
  element={
    <ProtectedRoute role="student">
      <LogicalSequence />
    </ProtectedRoute>
  }
/>

<Route
  path="/verbal-ability"
  element={
    <ProtectedRoute role="student">
      <VerbalAbility />
    </ProtectedRoute>
  }
/>
<Route
  path="/reading-comprehension"
  element={
    <ProtectedRoute role="student">
      <ReadingComprehension />
    </ProtectedRoute>
  }
/>
<Route
  path="/sentence-correction"
  element={
    <ProtectedRoute role="student">
      <SentenceCorrection />
    </ProtectedRoute>
  }
/>

<Route
  path="/synonyms-antonyms"
  element={
    <ProtectedRoute role="student">
      <SynonymsAntonyms />
    </ProtectedRoute>
  }
/>
<Route
  path="/error-detection"
  element={
    <ProtectedRoute role="student">
      <ErrorDetection />
    </ProtectedRoute>
  }
/>

<Route
  path="/fill-blanks"
  element={
    <ProtectedRoute role="student">
      <FillBlanks />
    </ProtectedRoute>
  }
/>
      <Route
        path="/student/report"
        element={
          <ProtectedRoute role="student">
            <WeeklyReport />
          </ProtectedRoute>
        }
      />

      <Route
  path="/mock-interviews"
  element={
    <ProtectedRoute role="student">
      <InterviewPractice />
    </ProtectedRoute>
  }
/>
<Route
  path="/ai-feedback"
  element={
    <ProtectedRoute role="student">
      <AIFeedback />
    </ProtectedRoute>
  }
/>

<Route
  path="/weekly-reports"
  element={
    <ProtectedRoute role="student">
      <WeeklyReport />
    </ProtectedRoute>
  }
/>
<Route
  path="/resources/quant-formula-sheet"
  element={<QuantFormulaSheet />}
/>
<Route
  path="/resources/shortcut-tricks"
  element={<ShortcutTricks />}
/>
<Route
  path="/resources/previous-year-aptitude"
  element={<PreviousYearAptitude />}
/>
<Route path="/resources/dsa/arrays" element={<ArraysResource />} />
<Route path="/resources/dsa/strings" element={<StringsResource />} />
<Route path="/resources/dsa/linked-list" element={<LinkedListResource />} />
<Route path="/resources/dsa/stack-queue" element={<StackQueueResource />} />
<Route path="/resources/dsa/trees" element={<TreesResource />} />
<Route path="/resources/dsa/graphs" element={<GraphsResource />} />
<Route path="/resources/dsa/sorting" element={<SortingResource />} />
<Route path="/resources" element={<PlacementResources />} /> 
<Route
  path="/resources/interview/hr-questions"
  element={<HRQuestions />}
/>

<Route
  path="/resources/interview/technical-questions"
  element={<TechnicalQuestions />}
/>  
<Route
  path="/resources/interview/self-introduction"
  element={<SelfIntroduction />}
/>

<Route
  path="/resources/interview/gd-tips"
  element={<GDTips />}
/>

<Route
  path="/resources/interview/communication-skills"
  element={<CommunicationSkills />}
/>  
<Route path="/resources/career/linkedin" element={<LinkedInProfile />} />
<Route path="/resources/career/github" element={<GitHubPortfolio />} />
<Route path="/resources/career/internship" element={<InternshipPreparation />} />
<Route
  path="/resume-tips"
  element={<ResumeTips />}
/>
<Route path="/roadmap" element={<PlacementRoadmap />} />
<Route path="/contact" element={<Contact />} />
<Route path="/companies" element={<Companies />} />
<Route path="/company/accenture" element={<Accenture />} />
<Route path="/company/capgemini" element={<Capgemini />} />
<Route path="/company/ibm" element={<IBM />} />
<Route path="/company/cognizant" element={<Cognizant />} />
<Route path="/company/infosys" element={<Infosys />} />
<Route path="/company/tcs" element={<TCS />} />
<Route path="/company/l&t-infotech" element={<LTI />} />
<Route path="/company/lti" element={<LTI />} />
<Route path="/company/deloitte" element={<Deloitte />} />
<Route path="/company/oracle" element={<Oracle />} />
<Route path="/company/mindtree" element={<MindTree />} />
<Route path="/company/comviva" element={<Comviva />} />
<Route path="/company/mahindra-comviva" element={<Comviva />} />
<Route path="/company/dxc" element={<DXC />} />
<Route path="/company/cgi" element={<CGI />} />
<Route path="/company/hcl" element={<HCL />} />
<Route path="/company/qualcomm" element={<Qualcomm />} />
<Route path="/company/hsbc" element={<HSBC />} />

<Route
  path="/student/profile"
  element={
    <ProtectedRoute role="student">
      <StudentProfile />
    </ProtectedRoute>
  }
/>

      {/* ✅ Recruiter Routes */}
      <Route
        path="/recruiter/dashboard"
        element={
          <ProtectedRoute role="recruiter">
            <RecruiterDashboard />
          </ProtectedRoute>
        }
      />

      

      {/* ✅ 404 Page Route */}
      <Route
        path="*"
        element={
          <div style={{ padding: "80px", textAlign: "center" }}>
            <h1 style={{ fontSize: "50px", color: "#691883" }}>
              404
            </h1>

            <h2>Page Not Found</h2>

            <p>
              The page you are looking for does not exist.
            </p>
          </div>
        }
      />
    </Routes>
  );
}