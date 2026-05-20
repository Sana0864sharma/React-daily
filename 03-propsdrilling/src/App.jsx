import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "data:image/jpeg;base64,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",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$48/hr",
    location: "Mountain View, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$62/hr",
    location: "Seattle, WA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Support Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Menlo Park, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$65/hr",
    location: "Cupertino, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$75/hr",
    location: "Los Gatos, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: "$50/hr",
    location: "San Jose, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$38/hr",
    location: "Austin, TX, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$68/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$58/hr",
    location: "Dublin, Ireland"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} date={elem.datePosted} pay={elem.payPerHour} location={elem.location} image={elem.brandLogo}/>;
      })}

    </div>
  )
}

export default App
