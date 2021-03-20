import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private _exercises = {
    light: [
      {
        day: 1,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 10,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 5,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 15,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 2,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 3,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 4,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 5,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 6,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 7,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 8,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 9,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 10,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 11,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 12,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 13,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 14,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 15,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 16,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 17,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 18,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 19,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 20,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 21,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 22,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 23,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 24,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 25,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 26,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 27,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 28,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 29,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
      {
        day: 30,
        finished: false,
        exercises: [
          {
            image: 'assets/exercises/bicycle-crunch.gif',
            name: 'Bicycle Crunch',
            reps: 13,
            done: false,
            description: '<ul><li>Sit on the floor with your knees bent, feet lifted, and hands behind your head.</li>' +
              '<li>Keep your chest up and your back straight as you lean back to engage your abs.</li>' +
              '<li>Twist to bring your right elbow to your left knee, straightening your right leg.</li>' +
              '<li>Repeat the same steps for the other side, without resting the neck on the floor.</li>' +
              '<li>You can eliminate touching the elbow and the knee, and perform simple cycling in the air by lying on your back.</li></ul>'
          },
          {
            image: 'assets/exercises/leg-lift.gif',
            name: 'Leg Lift',
            reps: 8,
            done: false,
            description: '<ul><li>Lie flat on the floor, with your legs straight and your hands to the side.</li>' +
              '<li>Lift your legs 6-10 inches off the floor.</li>' +
              '<li>Make sure you don\'t arch your back - keep it flat against the floor.</li>' +
              '<li>Hold your legs in this position for a few seconds, and then lower them back down.</li>' +
              '<li>Repeat, holding for as long as you can each time.</li></ul>'
          },
          {
            image: 'assets/exercises/sit-ups.gif',
            name: 'Sit-Ups',
            reps: 18,
            done: false,
            description: '<ul><li>Start by lying on your back with your knees bent.</li>' +
              '<li>Put your fingertips on the back of your ears.</li>' +
              '<li>Lift your torso up as close to your thighs as possible.</li>' +
              '<li>Lower your torso down to the floor so you’re back in the starting position. </li>' +
              '</ul>'
          }
        ]
      },
    ],
    moderate: [],
    advanced: []
  };

  constructor() {
  }


  getExercises(level){
    return this._exercises[level];
  }


  checkDays(level,active_day){

    for(let i =0; i<this._exercises[level].length; i++){
      if(this._exercises[level][i].day<active_day){
        this._exercises[level][i].finished = true;
      }
      else{
        break;
      }
    }
  }

  finishDay(day, level){
    this._exercises[level][day-1].finished = true;
  }
}
