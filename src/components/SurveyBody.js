import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const [q11, setQ11] = useState(null);
  const [q12, setQ12] = useState(null);
  const [q13, setQ13] = useState(null);
  const [q14, setQ14] = useState(null);
  const [q15, setQ15] = useState(null);
  const [q16, setQ16] = useState(null);
  const [q17, setQ17] = useState(null);
  const [q18, setQ18] = useState(null);
  const [remakrsQ10, setRemakrsQ10] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://192.168.10.11:5050/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10value = (e) => {
    setQ10(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const q12value = (e) => {
    setQ12(e.target.value);
  };
  const q13value = (e) => {
    setQ13(e.target.value);
  };
  const q14value = (e) => {
    setQ14(e.target.value);
  };
  const q15value = (e) => {
    setQ15(e.target.value);
  };
  const q16value = (e) => {
    setQ16(e.target.value);
  };
  const q17value = (e) => {
    setQ17(e.target.value);
  };
  const q18value = (e) => {
    setQ18(e.target.value);
  };
  const remarksq10 = (e) => {
    setRemakrsQ10(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans8: q8,
      ans9: q9,
      ans10: q10,
      ans11: q11,
      ans12: q12,
      ans13: q13,
      ans14: q14,
      ans15: q15,
      ans16: q16,
      ans17: q17,
      ans18: q18,
      remarksQ10: remakrsQ10,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://192.168.10.11:5050/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" || q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ২. আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি । আমি কি আপনার সাথে একটু
          কথা বলতে পারি?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুনবা কথা শেষ করে
          সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <p
        className="font-weight-bold"
        style={{ display: q2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জনানো যাচ্ছে যে আপনার কলটি রেকর্ড করা হচ্ছে এবং তা
        ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আমি কি জানতে পারি জাতীয় পরিচয়পত্র অনুযায়ী আপনার বয়স কত?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর আসে ‘১৮ বছরের বেশি’ তবে কথা বলা চালিয়ে যাবেন, নতুবা
          ধন্যবাদ দিয়ে কথা শেষ করে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="-18">১৮ এর নিচে</option>
            <option value="18-23">১৮-২৩</option>
            <option value="24-29">২৪-২৯</option>
            <option value="30-25">৩০-৩৫</option>
            <option value="35+">৩৫+</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "18-23" || q3 === "24-29" || q3 === "30-25"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৪. স্যার, আপনি কি ধূমপান করেন?</h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ হয় তবে জিজ্ঞসা করবে ৫নং প্রশ্ন। যদি উত্তর না আসে তবে
          ধন্যবাদ দিয়ে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৫. স্যার, আমি কি জানতে পারি, আপনি কোন ব্র্যান্ড এর সিগারেট ধুমপান
          করেন?
        </h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="navy">নেভি</option>
            <option value="star">ষ্টার</option>
            <option value="starNext">ষ্টার নেক্সট</option>
            <option value="jpgl">JPGL</option>
            <option value="luckyStrike">লাকি স্ট্রাইক</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q5 === "navy" ||
            q5 === "star" ||
            q5 === "starNext" ||
            q5 === "jpgl" ||
            q5 === "luckyStrike" ||
            q5 === "others"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৬. স্যার, গত এক সপ্তাহের মধ্যে আপনার সাথে কি কোনো সিগারেট কোম্পানির
          প্রতিনিধি/BA এর সাথে দেখা হয়েছিল?
        </h6>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৭. প্রতিনিধি কী আপনাকে নতুন কোনো ব্র্যান্ড সম্পর্কে জানিয়েছে?</h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q7 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>৮. স্যার, ব্র্যান্ডটির নাম কি মনে আছে / বলতে পারবেন?</h6>
        <Form.Group onChange={q8value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="navy">নেভি</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q7 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৯. স্যার আপনি কি প্রতিনিধির অনুরোধে দোকান থেকে কোনো সিগারেট কিনে
          খেয়েছেন?
        </h6>
        <Form.Group onChange={q9value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q8 === "navy" || q8 === "others" || q9 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>১০. স্যার আপনি কয় শলাকা সিগারেট কিনেছিলেন?</h6>
        <Form.Group onChange={q10value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="1stick">১ শলাকা</option>
            <option value="2stick">২ শলাকা</option>
            <option value="5stick">5 শলাকা</option>
            <option value="20stick2packet">২০ শলাকার ২টি প্যাকেট</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q10 === "5stick" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১১. স্যার সিগারেট ক্রয় করার পর প্রতিনিধি আপনাকে কোনো কিছু দিয়েছিল কি?
        </h6>
        <Form.Group onChange={q11value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q10 === "20stick2packet" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>১২. আপনার সিগারেট পানের অভিজ্ঞতা কেমন ছিলো?</h6>
        <Form.Group onChange={q12value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="good">ভালো</option>
            <option value="average">মোটামুটি</option>
            <option value="notGood">ভালোনা</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q10 === "1stick" || q10 === "2stick" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>১৩. স্যার আপনি প্রতি শলাকা কত টাকা দিয়ে ক্রয় করেছিলেন?</h6>
        <Form.Group onChange={q13value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="fiveTaka">৫ টাকা</option>
            <option value="sevenTaka">৭ টাকা</option>
            <option value="eightTaka">৮ টাকা</option>
            <option value="tenTaka">১০ টাকা</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q10 === "20stick2packet" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>১৪. স্যার আপনি প্যাকেট কত টাকা দিয়ে ক্রয় করেছিলেন?</h6>
        {/* <Form.Group
          className="mb-3"
          onChange={q14value}
          as={Row}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className="w-50 ml-3"
            type="number"
            placeholder="Input Price"
          />
        </Form.Group> */}
        <Form.Group onChange={q14value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="below280">২৮০ এর নিচে</option>
            <option value="280">২৮০</option>
            <option value="above280">২৮০ এর উপরে</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q13 === "fiveTaka" ||
            q13 === "sevenTaka" ||
            q13 === "eightTaka" ||
            q13 === "tenTaka" ||
            q14 === "below280" ||
            q14 === "280" ||
            q14 === "above280" ||
            q11 === "yes" ||
            q11 === "no"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১৫. আপনার কি মনে আছে প্রতিনিধি এইব্র্যান্ড নিয়ে কথা বলার সময় তার মূল
          বক্তব্য কি ছিল বা কি কি কথা বলেছিল?
        </h6>
        <p className="text-secondary">
          বেরি ক্যাপসূল ফাটালেই ফ্রেশ ও স্মার্ট অপশন
        </p>
        <Form.Group onChange={q15value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="berryCapsule">বেরি ক্যাপসূল</option>
            <option value="crackedFresh">ফাটালেই ফ্রেশ</option>
            <option value="freshAndSmart">ফ্রেশ ও স্মার্ট</option>
            <option value="smartOption">স্মার্ট অপশন</option>
            <option value="option">অপশন</option>
            <option value="cannotRemember">মনে নেই</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q15 === "berryCapsule" ||
            q15 === "crackedFresh" ||
            q15 === "freshAndSmart" ||
            q15 === "smartOption" ||
            q15 === "option" ||
            q15 === "cannotRemember"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>১৬. আপনি কি ভবিষ্যতে এই ব্র্যান্ডটির সিগারেট পান করবেন?</h6>
        <Form.Group onChange={q16value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q16 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১৭. স্যার, আমি কি জানতে পারি, আপনি কোন স্পেশাল ফিচারের জন্য ভবিষ্যতে
          এই ব্র্যান্ডের সিগারেট পান করবেন?
        </h6>
        <Form.Group onChange={q17value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="taste(berryCapsule)">স্বাদ(বেরি ক্যাপসূল)</option>
            <option value="packOrStickDesign">
              প্যাক ডিজাইন বা স্টিক ডিজাইন
            </option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="price">মূল্য</option>
            <option value="offer">অফার</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q16 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১৮. স্যার, আমি কি জানতে পারি, এই ব্র্যান্ডের সিগারেট ভবিষ্যতে কেনো পান
          করবেন না?
        </h6>
        <Form.Group onChange={q18value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="taste(berryCapsule)">স্বাদ(বেরি ক্যাপসূল)</option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="price">মূল্য</option>
            <option value="habbit">অভ্যাস</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q10 === "others" ? "block" : "none",
        }}
        className="mt-2"
      >
        <Form.Group
          className="mb-3"
          onChange={remarksq10}
          as={Row}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className="w-50 ml-3"
            type="text"
            placeholder="Type Remarks"
          />
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q3 === "-18" ||
            q3 === "35+" ||
            q4 === "no" ||
            q6 === "no" ||
            q9 === "no" ||
            q10 === "others" ||
            q17 === "taste(berryCapsule)" ||
            q17 === "packOrStickDesign" ||
            q17 === "availability" ||
            q17 === "price" ||
            q17 === "offer" ||
            q18 === "taste(berryCapsule)" ||
            q18 === "availability" ||
            q18 === "price" ||
            q18 === "habbit"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
