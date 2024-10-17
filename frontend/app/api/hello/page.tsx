"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CareerFairSurvey() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [groupChoice, setGroupChoice] = useState("");
  const [weekendActivity, setWeekendActivity] = useState("");
  const [collegeScene, setCollegeScene] = useState("");
  const [firstImpression, setFirstImpression] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nickname, groupChoice, weekendActivity, collegeScene, firstImpression });
    router.push('/thank-you');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Career Fair Survey</h1>
      <form onSubmit={handleSubmit}>
        {/* Demographic Questions */}
        <div className="mb-4">
          <label htmlFor="nickname" className="block mb-2">
            1. If you could choose a nickname for yourself, what would it be?
          </label>
          <label htmlFor="nickname" className="block mb-2">
            1. إذا كان بإمكانك اختيار لقب لنفسك، فما سيكون؟
          </label>
          <input 
            id="nickname"
            type="text" 
            value={nickname} 
            onChange={(e) => setNickname(e.target.value)} 
            className="w-full p-2 border rounded"
            placeholder="Your nickname" 
            required
          />
        </div>

        {/* Group Selection */}
        <div className="mb-4">
          <label htmlFor="groupChoice" className="block mb-2">
            2. Imagine you’re in a classroom filled with students from different programs. Which group do you see yourself sitting with?
          </label>
          <label htmlFor="groupChoice" className="block mb-2">
            2. تخيل أنك في فصل دراسي مليء بالطلاب من برامج مختلفة. مع أي مجموعة ترى نفسك جالسًا؟
          </label>
          <select 
            id="groupChoice"
            value={groupChoice} 
            onChange={(e) => setGroupChoice(e.target.value)} 
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select an option</option>
            <option value="a">a) Those discussing the latest scientific discoveries.</option>
            <option value="b">b) The ones sketching and talking about new art trends.</option>
            <option value="c">c) The group planning a business pitch or discussing the stock market.</option>
            <option value="d">d) The students working on hands-on technical projects.</option>
          </select>
        </div>

        {/* Weekend Activity */}
        <div className="mb-4">
          <label htmlFor="weekendActivity" className="block mb-2">
            3. Picture your perfect weekend activity at school. What would you choose?
          </label>
          <label htmlFor="weekendActivity" className="block mb-2">
            3. تخيل نشاط عطلة نهاية الأسبوع المثالي في المدرسة. ماذا ستختار؟
          </label>
          <select 
            id="weekendActivity"
            value={weekendActivity} 
            onChange={(e) => setWeekendActivity(e.target.value)} 
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select an option</option>
            <option value="a">a) Joining a study group to prepare for an upcoming exam.</option>
            <option value="b">b) Heading to the gym or participating in a sports event.</option>
            <option value="c">c) Attending a local cultural event or community meetup.</option>
            <option value="d">d) Spending time reading or working on a personal project.</option>
          </select>
        </div>

        {/* College Scene */}
        <div className="mb-4">
          <label htmlFor="collegeScene" className="block mb-2">
            4. When you think about college, which scene resonates with you the most?
          </label>
          <label htmlFor="collegeScene" className="block mb-2">
            4. عندما تفكر في الكلية، أي مشهد يبدو الأكثر تناسبًا معك؟
          </label>
          <select 
            id="collegeScene"
            value={collegeScene} 
            onChange={(e) => setCollegeScene(e.target.value)} 
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select an option</option>
            <option value="a">a) Presenting a project with a group of classmates.</option>
            <option value="b">b) Working on a solo assignment in a quiet library.</option>
            <option value="c">c) Leading a team in a sports competition.</option>
            <option value="d">d) Volunteering at a community service event.</option>
          </select>
        </div>

        {/* First Impression */}
        <div className="mb-4">
          <label htmlFor="firstImpression" className="block mb-2">
            5. You just got accepted into your dream school! What’s the first thing you’d like your new classmates to know about you?
          </label>
          <label htmlFor="firstImpression" className="block mb-2">
            5. لقد تم قبولك للتو في مدرستك المثالية! ما هو أول شيء تود أن يعرفه زملاؤك الجدد عنك؟
          </label>
          <select 
            id="firstImpression"
            value={firstImpression} 
            onChange={(e) => setFirstImpression(e.target.value)} 
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select an option</option>
            <option value="a">a) I love being part of team activities.</option>
            <option value="b">b) I prefer working on my own.</option>
            <option value="c">c) I’m always up for a sports challenge.</option>
            <option value="d">d) I’m passionate about helping out in the community.</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Survey
        </button>
      </form>
    </div>
  );
}
