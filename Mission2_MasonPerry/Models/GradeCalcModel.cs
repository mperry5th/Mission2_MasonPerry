using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2_MasonPerry.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100)]
        [Required]
        public float Assignment { get; set; }
        [Range(0, 100)]
        [Required]
        public float GroupProjects { get; set; }
        [Range(0, 100)]
        [Required]
        public float Quizzes { get; set; }
        [Range(0, 100)]
        [Required]
        public float Exams { get; set; }
        [Range(0, 100)]
        [Required]
        public float Intex { get; set; }

    }
}
