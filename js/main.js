// // crud 

// var courseName=document.querySelector("#courseName");
// var courseCategory=document.querySelector("#courseCategory");
// var coursePrice=document.querySelector("#coursePrice");
// var courseDescription=document.querySelector("#courseDescription");
// var courseCapacity=document.querySelector("#courseCapacity");
// var addBtn=document.querySelector("#click");

// var courses=[];
// var inputs= document.querySelectorAll(".inputs")
// addBtn.addEventListener("click",function(e)
// {
//     e.preventDefault();
//     addCourse();
//     clearall();
//     displydata();
// })

// function addCourse()
// {
//     var course=
//     {
//         name:courseName.value,
//         category:courseCategory.value,
//         price:coursePrice.value,
//         desc:courseDescription.value,
//         capacity:courseCapacity.value,
//     }
//     courses.push(course);
//     // console.log(courses);
// }

// function clearall()
// {
//     for(var i=0; i<inputs.length; i++)
//     {
//         inputs[i].value="";
//     }
// }


// function displydata()
// {
//     var result=``;
//     for (var i=0; i<courses.length; i++) 
// {
//     result+=`
//         <tr>
//             <td>${i}</td>
//             <td>${courses[i].name}</td>
//             <td>${courses[i].category}</td>
//             <td>${courses[i].price}</td>
//             <td>${courses[i].desc}</td>
//             <td>${courses[i].capacity}</td>
//             <td><button class='btn btn-outline-info'>update</button> </td>
//             <td><button class='btn btn-outline-danger' onclick="deleteCourse(${i})">delete</button></td>
//         </tr>
//     `;
// }
// document.getElementById("data").innerHTML=result;

// }

// function deleteCourse(id)
// {
//     courses.splice(id, 1);

//     displydata();
// }


var courseName=document.querySelector("#courseName");
var courseCategory=document.querySelector("#courseCategory");
var coursePrice=document.querySelector("#coursePrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapacity=document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
var inputs=document.querySelectorAll(".inputs");
var search=document.querySelector("#search");
var msgerorr=document.querySelector(".msgerorr");
var isnameTrue=false;

addBtn.addEventListener("click", function(e)
{
    e.preventDefault();
    addCourse(); 
    displydata();   
    clearall();
})
var courses=[];
function addCourse()
{
    var course=
    {
        name: courseName.value,
        category: courseCategory.value,
        price: coursePrice.value,
        desc: courseDescription.value,
        capacity: courseCapacity.value,
    };
    courses.push(course);
    // console.log(courses);
}


function displydata()
{
    var result="";
    for(i in courses)
    {
        result+=`
            <tr> 
                <td>${i}</td>
                <td>${courses[i].name}</td>
                <td>${courses[i].category}</td>
                <td>${courses[i].price}</td>
                <td>${courses[i].desc}</td>
                <td>${courses[i].capacity}</td>
                <td><button class='btn btn-outline-info'>update</button> </td>
                <td><button class='btn btn-outline-danger' onclick="deleteCourse(${i})">delete</button></td>
            </tr>
        `
    }
    document.getElementById("data").innerHTML=result;
}

function clearall()
{
    for(i in inputs)
    {
        inputs[i].value='';
    }
}

function deleteCourse(id)
{
    courses.splice(id,1);
    displydata();
}

search.addEventListener("keyup", function(e)
{
    var result="";
    for(i in courses)
    {
        if(courses[i].name.includes(e.target.value.toLowerCase()))
        result+=`
            <tr> 
                <td>${i}</td>
                <td>${courses[i].name}</td>
                <td>${courses[i].category}</td>
                <td>${courses[i].price}</td>
                <td>${courses[i].desc}</td>
                <td>${courses[i].capacity}</td>
                <td><button class='btn btn-outline-info'>update</button> </td>
                <td><button class='btn btn-outline-danger' onclick="deleteCourse(${i})">delete</button></td>
            </tr>
        `
    }
    document.getElementById("data").innerHTML=result;
})

courseName.addEventListener("keyup",function()
{
    var pattern=/^[A-Z][a-z]{2,10}$/;
    
    if(pattern.test(courseName.value))
    {
        if(courseName.classList.contains("is-invalid"))
        {
            courseName.classList.remove("is-invalid");
            courseName.classList.add("is-valid");
        }
        courseName.classList.add("is-valid"); 
        msgerorr.style.cssText="display:none";
        isnameTrue=true;
    }
    else
    {
        if(courseName.classList.contains("is-valid"))
        {
            courseName.classList.remove("is-valid");
            courseName.classList.add("is-valid");
        }
        courseName.classList.add("is-invalid");
        msgerorr.style.cssText="display:block";
        isnameTrue=false;
    }
    if(isnameTrue)
    {
    addBtn.removeAttribute("disabled")
    }
    else
    {
    addBtn.setAttribute("disabled", "disabled");
    }
})







