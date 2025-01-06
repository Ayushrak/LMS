import { Button } from '@/components/ui/button'
import { courseApi } from '@/features/api/courseApi'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LectureTab from './LectureTab'

const EditLecture = () => {
    const params = useParams();
    const courseId =  params.courseId;

  return (
    <div>
        <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-2'>
            <Link to={`/admin/course/${courseId}`}>
                <Button size={icon} variant="outline" className="rounded-full">
                    <ArrowLeft size={16}/>
                </Button>
            </Link>
            <h1 className='font-bold text-xl'>Update Your Lecture</h1>
        </div>
        <LectureTab />
    </div>
    </div>

  )
}

export default EditLecture