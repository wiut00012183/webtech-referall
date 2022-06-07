const Education = require('../models/education');

exports.postNewEducation = (req, res) => {
  const education_name = req.body.education_name;
  const location = req.body.location;
  const phone_number = req.body.phone_number;
  const mode_of_learning = req.body.mode_of_learning;
  
  const education = new Education({education_name,location,phone_number,mode_of_learning})
    
 
  education.save().then(()=>{
      return res.redirect('/')
  }).catch(err=>{
    console.log(err);
    return res.redirect("/errorpage")
  })
} 

exports.getAllEducation = (req, res) => {
  Education.find()
  .then(edu=>{
      res.render('main/index', {
        title: 'Education centers',
        edu
      });
  }).catch(err => {
    return  res.redirect("/errorpage")
  })
};

exports.getNewEducation = (req, res) => {
  res.render('main/addEducation', {
    title: 'Add new Education'
  });
};

exports.postEditEducation = (req, res, next) => {
  const id = req.body.educationId;
  const education_name = req.body.education_name;
  const location = req.body.location;
  const phone_number = req.body.phone_number;
  const mode_of_learning = req.body.mode_of_learning;

  Education.findById(id)
    .then(edu => {
      if (!edu) {
        return res.redirect('/errorpage');
      }
      edu.education_name = education_name;
      edu.location = location;
      edu.phone_number = phone_number;
      edu.mode_of_learning = mode_of_learning;

      return edu.save().then(result => {
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.deleteEducation = (req, res)=>{
  const id = req.body.educationId;
  Education.findByIdAndRemove(id).then(()=>{
    return res.redirect("/");
  }).catch(err=>console.log(err))
}


 


exports.getEditEducation = (req, res, next) => {
  const id = req.params.educationId;
  Education.findById(id)
    .then(edu => {
      if (!edu) {
        return res.redirect('/');
      }
      res.render('main/editEducation', {
        title: 'Edit Education',
        edu
      });
    })
    .catch(err => {
       console.log(err)
    });
};


exports.postEducationDetail = (req, res, next) => {
  const id = req.body.educationId;
  Education.find({_id:id})
  .then((edu)=>{
    res.render('main/detail', {
      title: "detail page",
      edu
    });
  }).catch(err => {console.log(err)})
};

