/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import I18n from 'i18n!new_user_tutorial'
import TutorialTrayContent from './TutorialTrayContent'

const GradesTray = () => (
  <TutorialTrayContent
    heading={I18n.t('Grades')}
    subheading={I18n.t('Enter and distribute grades')}
    image="/images/tutorial-tray-images/Panda_Grades.svg"
    imageWidth="8.5rem"
    seeAllLink={{
      label: I18n.t('See more in Canvas Guides'),
      href: `https://community.canvaslms.com/t5/Instructor-Guide/tkb-p/Instructor`
    }}
    links={[
      {
        label: I18n.t('How do I use the Gradebook?'),
        href:
          'https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-use-the-Gradebook/ta-p/701'
      },
      {
        label: I18n.t('How do I enter and edit grades in the Gradebook?'),
        href:
          'https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-enter-and-edit-grades-in-the-Gradebook/ta-p/724'
      },
      {
        label: I18n.t('How do I post grades for an assignment in the Gradebook?'),
        href:
          'https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-post-grades-for-an-assignment-in-the-Gradebook/ta-p/576'
      },
      {
        label: I18n.t('How do I view assignments or students individually in the Gradebook?'),
        href:
          'https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-view-assignments-or-students-individually-in-the/ta-p/1247'
      },
      {
        label: I18n.t('How do I use SpeedGrader?'),
        href: 'https://community.canvaslms.com/t5/Canvas-Basics-Guide/What-is-SpeedGrader/ta-p/13'
      },
      {
        label: I18n.t('How do I view the details of a submission for a student in SpeedGrader?'),
        href:
          'https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-view-the-details-of-a-submission-for-a-student-in/ta-p/762'
      }
    ]}
  >
    {I18n.t(`Display grades as
      points, percentages, complete/incomplete, or any other method that matches
      your course grading scheme, and filter and arrange Gradebook entries
      according to your preferences. Automatically apply a grade for missing or
      late submissions, and easily hide grades until you're ready for students
      to view them. For simplified grading, use SpeedGrader to view and grade submissions.`)}
  </TutorialTrayContent>
)

export default GradesTray
