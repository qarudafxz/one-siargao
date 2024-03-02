export interface Database {
 public: {
  Tables: {
   movies: {
    Row: {
     id: number
     name: string
     data: Json | null
    }
    Insert: {
     id?: never
     name: string
     data?: Json | null
    }
    Update: {
     id?: never
     name?: string
     data?: Json | null
    }
   }
  }
 }
}

export interface StartPoints {
 location_name: string
 location_code: string
 coordinates: number[]
}

export interface DataProps {
 starting_point?: string
 time_of_travel?: string
 mode_of_transportation?: string
 budget?: number
}
