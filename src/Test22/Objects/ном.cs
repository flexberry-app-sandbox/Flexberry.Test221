﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test22
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ном.
    /// </summary>
    // *** Start programmer edit section *** (ном CustomAttributes)

    // *** End programmer edit section *** (ном CustomAttributes)
    [AutoAltered()]
    [Caption("Ном")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("номE", new string[] {
            "номном as \'Номном\'",
            "контр as \'контр\'",
            "контр.контраг as \'контраг\'"})]
    [View("номL", new string[] {
            "номном as \'Номном\'"})]
    public class ном : ICSSoft.STORMNET.DataObject
    {
        
        private string fномном;
        
        private IIS.Test22.контр fконтр;
        
        // *** Start programmer edit section *** (ном CustomMembers)

        // *** End programmer edit section *** (ном CustomMembers)

        
        /// <summary>
        /// номном.
        /// </summary>
        // *** Start programmer edit section *** (ном.номном CustomAttributes)

        // *** End programmer edit section *** (ном.номном CustomAttributes)
        [StrLen(255)]
        public virtual string номном
        {
            get
            {
                // *** Start programmer edit section *** (ном.номном Get start)

                // *** End programmer edit section *** (ном.номном Get start)
                string result = this.fномном;
                // *** Start programmer edit section *** (ном.номном Get end)

                // *** End programmer edit section *** (ном.номном Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ном.номном Set start)

                // *** End programmer edit section *** (ном.номном Set start)
                this.fномном = value;
                // *** Start programmer edit section *** (ном.номном Set end)

                // *** End programmer edit section *** (ном.номном Set end)
            }
        }
        
        /// <summary>
        /// Ном.
        /// </summary>
        // *** Start programmer edit section *** (ном.контр CustomAttributes)

        // *** End programmer edit section *** (ном.контр CustomAttributes)
        [PropertyStorage(new string[] {
                "контр"})]
        [NotNull()]
        public virtual IIS.Test22.контр контр
        {
            get
            {
                // *** Start programmer edit section *** (ном.контр Get start)

                // *** End programmer edit section *** (ном.контр Get start)
                IIS.Test22.контр result = this.fконтр;
                // *** Start programmer edit section *** (ном.контр Get end)

                // *** End programmer edit section *** (ном.контр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ном.контр Set start)

                // *** End programmer edit section *** (ном.контр Set start)
                this.fконтр = value;
                // *** Start programmer edit section *** (ном.контр Set end)

                // *** End programmer edit section *** (ном.контр Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "номE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View номE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("номE", typeof(IIS.Test22.ном));
                }
            }
            
            /// <summary>
            /// "номL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View номL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("номL", typeof(IIS.Test22.ном));
                }
            }
        }
    }
}
