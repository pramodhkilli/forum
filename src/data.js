const defaultThreads = [
  {
    id: 1,
    title: "2581. Count Number of Possible Root Nodes",
    author: "Pramodh",
    date: Date.now(),
    content:
      "It is a technique where we solve a given problem for all roots.This is a similiar template to my previous post Solution of LC 2583 Steps Arbitrary root the tree, lets take node 0 for explanation. Solve the given problem as if it was rooted at node 0. Similarily solve the problem for all nodes Even if you have never heard of this term before, no problem it just DFS. In this post I will explain how to solve this particular question even if you have never done rerooting before. If you want proper resources for learning/reading about re-rooting then refer these.Re rootingRe rooting section of this book Firstly lets solve a simpler task. Given a rooted tree (root 0) find the number of guesses which are correct. run a dfs storing parent of each node in parents array.count the number of guesses which are correct.",
    comments: [
      {
        author: "Pramodh",
        date: Date.now(),
        content: "what is time complexity ?",
      },
      {
        author: "Pavan",
        date: Date.now(),
        content: "what is the space complexity ?",
      },
    ],
  },
  {
    id: 2,
    title: "2187. Minimum Time to Complete Trips",
    author: "Pavan",
    date: Date.now(),
    content:
      "This is what we call Binary Search on Answers. First we need to see that what can be the range of time. The range of time will be lowest value of the time array and highest value will be minimum value in the time array multiplied by totalTrips because at worst case the bus with min time will do all trips which will be minimum time taken to do all trips or you can take maximum value in time array multiplied by totalTrips if you are thinking in this way that at worstcase the bus with highest time will do all the trips. As the question is asking for minimum time so first one makes more sense than later one. But both are correct because obviously it will be eliminating right half if it gets totalTrips done with that particular time. Then we just traverse through the ranges and using Binary Search we check if the totalTrips is possible to do in that time or not. If possible then it's a possible answer and we are not sure that it's our minimum time so we do high=mid and if it's not possible then we move low to mid+1 because obviously we can't perform our task within that time. Atlast we just return the low that points to the minimum time that will take to complete the totalTrips.",
    comments: [
      {
        author: "Pramodh",
        date: Date.now(),
        content: "what is time complexity ?",
      },
      {
        author: "Pavan",
        date: Date.now(),
        content: "what is the space complexity ?",
      },
    ],
  },
  {
    id: 1,
    title: "2580. Return the good subarray",
    author: "Pramodh",
    date: Date.now(),
    content:
      "It is a technique where we solve a given problem for all roots.This is a similiar template to my previous post Solution of LC 2583 Steps Arbitrary root the tree, lets take node 0 for explanation. Solve the given problem as if it was rooted at node 0. Similarily solve the problem for all nodes Even if you have never heard of this term before, no problem it just DFS. In this post I will explain how to solve this particular question even if you have never done rerooting before. If you want proper resources for learning/reading about re-rooting then refer these.Re rootingRe rooting section of this book Firstly lets solve a simpler task. Given a rooted tree (root 0) find the number of guesses which are correct. run a dfs storing parent of each node in parents array.count the number of guesses which are correct.",
    comments: [
      {
        author: "Pramodh",
        date: Date.now(),
        content: "what is time complexity ?",
      },
      {
        author: "Pavan",
        date: Date.now(),
        content: "what is the space complexity ?",
      },
    ],
  },
  {
    id: 1,
    title: "157. Maximum path sum in a Tree",
    author: "Pramodh",
    date: Date.now(),
    content:
      "It is a technique where we solve a given problem for all roots.This is a similiar template to my previous post Solution of LC 2583 Steps Arbitrary root the tree, lets take node 0 for explanation. Solve the given problem as if it was rooted at node 0. Similarily solve the problem for all nodes Even if you have never heard of this term before, no problem it just DFS. In this post I will explain how to solve this particular question even if you have never done rerooting before. If you want proper resources for learning/reading about re-rooting then refer these.Re rootingRe rooting section of this book Firstly lets solve a simpler task. Given a rooted tree (root 0) find the number of guesses which are correct. run a dfs storing parent of each node in parents array.count the number of guesses which are correct.",
    comments: [
      {
        author: "Pramodh",
        date: Date.now(),
        content: "what is time complexity ?",
      },
      {
        author: "Pavan",
        date: Date.now(),
        content: "what is the space complexity ?",
      },
    ],
  },
];

var threads = defaultThreads;
if (localStorage && localStorage.getItem("threads")) {
  threads = JSON.parse(localStorage.getItem("threads"));
} else {
  threads = defaultThreads;
  localStorage.setItem("threads", JSON.stringify(defaultThreads));
}

export default defaultThreads;
